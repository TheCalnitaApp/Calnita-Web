import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function ApexChartSales(){

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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
       
        },
        grid:  {
            show:  true
        },
        yaxis: {
            show: true,
            labels: {
				
				formatter: function (value: any) {
					return '₦' + value;
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
        name: "Today's Profit",
        data: [30, 10, 35, 50, 39, 170, 70, 91, 125]
      }, {
        name: "Profit(previous period)",
        data: [11, 69, 45, 32, 24, 52, 41, 100, 150]
      }]

    return(
        <div className="w-full h-[35vh] flex flex-col p-4 justify-between bg-white rounded-md">
            <div className="flex flex-col h-fit"> 
            <span className="font-thin text-xs">Today&apos;s Sales</span>
                <span className="text-2xl font-semibold">₦ 34,000</span>
               
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
