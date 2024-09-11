import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const viewdata = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.datetime).toLocaleString()),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map(entry => entry.temperature),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)"
      }
    ]
  };

  return <Line data={chartData} />;
};

export default viewdata;
