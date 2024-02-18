import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function ApexChartCoversion(){
    const generateDatesForMonth = (month: number) => {
        const currentYear = new Date().getFullYear();
        const startDate = new Date(currentYear, month - 1, 1); // Month is zero-based
        const endDate = new Date(currentYear, month, 0);
      
        const datesArray = [];
        const options:object = { day: 'numeric', month: "short" };
      
        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
          const formattedDate = date.toLocaleDateString('en-US', options);
          datesArray.push(formattedDate);
        }
        return datesArray;
      };

      const dates = generateDatesForMonth(11);

    const option = {
        chart: {
          id: 'apexchart-example',
          fontFamily: 'inherit',
          toolbar: {
            show: false
        }
        },
        colors:['#F92A63', '#D9D9D9'],
        xaxis: {
            show: false,
            labels: {
              show: true
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
          categories: dates,
       
        },
        grid:  {
            show:  true
        },
        yaxis: {
            show: true,
            labels: {
				
				formatter: function (value: any) {
					return '%' + value;
				}
			},
        },
        
    dataLabels: {
      enabled: false, // Hide data labels
      style: {
        colors: ['#F92A63', '#D9D9D9']
      }
    },
    legend: {
      show: true, // Hide legend
    },
      
      }

    const series = [{
        name: "Today's Coversion Rate",
        data: [
            105,  30, 60,  30, 125,  40, 60,  40,
            125, 105, 12, 125,  40,  12, 60, 125,
            105, 105, 25,  12,  25, 125, 12,  12,
            105,  12, 25,  30,  25,  40
          ]
      }, {
        name: "Conversion Rate(previous period)",
        data: [
            190, 125,  22,  22,  70, 125, 205,
            125,  70, 125,  70,  70, 125, 125,
             70, 125,  70,  15, 190,  15,  60,
            205, 190,  15, 190, 125, 205, 205,
            190, 125
          ]
      }]

    return(
        <div className="w-full h-[35vh] flex flex-col p-4 justify-between bg-white rounded-md">
            <div className="flex flex-col h-fit">
              <span className="font-thin text-xs">Today&apos;s Conversion Rate</span>
                <span className="text-2xl font-semibold">70%</span>
                
            </div>
            <div className="w-full h-full">
        <Chart
          options={option}
          series={series}
          type="area" // Use "area" for area charts
          width="100%"
          height="100%"
        />
            </div>
       
      </div>
    )

    
}
