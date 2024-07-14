// src/components/PlacementStatistics.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Number of Students Placed',
      data: [150, 200, 180, 220, 240],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Placement Statistics Over the Years',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const PlacementStatistics = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Placement Statistics</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
