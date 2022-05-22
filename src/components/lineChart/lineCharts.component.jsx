import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./lineCharts.styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const retailData = data.map((data) => data.retailSales);
  const wholeSaleData = data.map((data) => data.wholesaleSales);
  const lineChartData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        data: retailData,
        label: "Retail Sales",
        fill: true,
        borderWidth: 4,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "blue",
      },
      {
        data: wholeSaleData,
        label: "Whole Sales",
        fill: true,
        borderWidth: 4,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "grey",
      },
    ],
  };
  return (
    <div className="chartContainer">
      <Line
        typeof="line"
        width={200}
        height={60}
        options={{
          title: {
            display: true,
            text: "Retail Sales",
            fontSize: 40,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
        data={lineChartData}
      />
    </div>
  );
};

export default LineChart;
