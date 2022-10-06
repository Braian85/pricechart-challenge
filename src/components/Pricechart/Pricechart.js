import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Pricechart.css";


function Pricechart({ data, setPriceAndTime }) {
  const [chartData, setChartData] = useState([]);
  const options = {
    events: ["mousemove"],
    onHover: (e, chart) => {
      setPriceAndTime({
        price: chartData[chart[0]._index].y, 
        time: chartData[chart[0]._index].x
      })
    },  
    legend: {
      display: false,
    },
    hover: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    let values = [];
    if (data.prices) {
      data.prices.forEach((value) => {
        values.push({
          x: new Date(value[0]),
          y: Math.round(value[1]),
        });
      });
    }
    setChartData(values);
  }, [data]);

  return (
    <div className="pricechart__container">
      {chartData?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: "line",
                backgroundColor: "white",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                pointHoverBackgroundColor: "#5AC53B",
                pointHoverBorderColor: "#000000",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6,
                data: chartData,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default Pricechart;
