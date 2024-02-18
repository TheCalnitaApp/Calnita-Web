import React from "react";
import Dashboardbody from "../../components/content/Dashboardbody";
import ContainerLayout from "../../components/layout/Container";
import Statscard from "../../components/organisms/Statscard";
import { Chart } from "react-google-charts";
import ReactApexChart from "react-apexcharts";
import { ApexChartSales } from "@/utils/charts/chart";
import { ApexChartCoversion } from "@/utils/charts/conversionChart";

export const data: any = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 1300],
  ["Brazil", 400],
  ["Argentina", 550],
  ["Australia", 520],
  ["Indonesia", 350],
  ["South Africa", 380],
  ["Canada", 1200],
  ["France", 600],
  ["Russia", 700],
];

export const Demographics = {
    gender:[
         ["Gender", "population"],
    ["Non-binary", 10],
    ["Female", 60],
    ["Male", 20],
    ["Intersex", 10], 
    ],
    Age:[
        ["Age", "population"],
   ["18-24", 35],
   ["25-34", 46],
   ["35-44", 10],
   ["45-54", 10], 
   ["55-60+", 5], 
   ],
   Topcategories:[
    ["Category", "population"],
["My Skin", 60],
["My Hair", 20],
["Creams", 10],
["Suncare", 10], 
]
   // Below limit.
};
export const options = {
  // Africa
  colorAxis: { colors: ["#F9AB00", "#E37400"] },
  backgroundColor: "#fff",
  datalessRegionColor: "#fff",
  defaultColor: "#F9AB0",
  title: "Where your traffic is generated from, By Country, from no. of users",
};



const Analytics = () => {
  // Calculate total popularity

  const totalPopularity = data
    .slice(1)
    .reduce((total: number, countryData: number[]) => total + countryData[1], 0);

  // Sort the array in descending order based on the popularity
  const sortedData = data.slice(1).sort((a: any[], b: any[]) => b[1] - a[1]);

  return (
    <ContainerLayout name="ANALYTICS">
      <div className="w-full flex flex-col h-fit gap-8">
        <div className="flex flex-row gap-4 h-full w-full justify-items-center rounded-xl">
          <div className="flex flex-row justify-around items-center h-auto w-1/2">
          <ApexChartSales />
          </div>
          <div className="flex flex-row justify-around items-center h-auto w-1/2">
          <ApexChartCoversion />
          </div>
        </div>
        
        <div className="flex flex-row bg-white w-full h-full p-10 justify-items-center rounded-xl relative shadow-md ">
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
          <div className="w-2/5 h-full flex flex-col gap-6">
            <div className="w-full flex flex-row justify-between text-xs text-[#828282]">
              <span>Top Coutries</span> <span>Customers</span>
            </div>
            {sortedData.slice(0,4).map((data: any[], index: number) => (
              <div
                key={index}
                className="w-full justify-between flex flex-col gap-6 font-light"
              >
                <div className="w-full flex flex-row justify-between">
                  <span>{data[0]}</span> <span>{data[1]}</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-lg">
                  <div
                    className={`bg-mainPink h-full rounded-lg`}
                    style={{width: `${Math.ceil((data[1] / totalPopularity) * 100)}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row bg-white w-full h-full p-10 justify-items-center rounded-xl relative shadow-md ">
        <Chart
      chartType="PieChart"
      data={Demographics.gender}
      options={{title: "Gender"}}
      width={"100%"}
      height={"400px"}
    />
    <Chart
      chartType="PieChart"
      data={Demographics.Age}
      options={{title: "Age(years)"}}
      width={"100%"}
      height={"400px"}
    />
    <Chart
      chartType="PieChart"
      data={Demographics.Topcategories}
      options={{title: "Top selling categories"}}
      width={"100%"}
      height={"400px"}
    />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Analytics;
