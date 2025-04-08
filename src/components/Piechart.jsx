import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWithLabels = () => {
  const data = {
    labels: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5'],
    datasets: [
      {
        data: [30, 15, 25, 10, 20], // Non-equal data values
        backgroundColor: [
          '#F87171', // red-400
          '#FBBF24', // yellow-400
          '#4ADE80', // green-400
          '#60A5FA', // blue-400
          '#A855F7', // purple-400
        ],
        borderColor: [
          '#DC2626', // red-600
          '#D97706', // yellow-600
          '#16A34A', // green-600
          '#2563EB', // blue-600
          '#8B5CF6', // purple-600
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${data.datasets[0].data[context.dataIndex]}%`; // Customize tooltip label
          },
        },
      },
    },
  };

  return (
    <div className='flex w-full'>
    <div className="w-full bg-white dark:bg-gray-800 rounded-md shadow-md p-8 ml-4">
      <div className="flex justify-center space-x-20"> {/* Center the pies horizontally */}
        {/* Reduce the width here using Tailwind classes */}
        <div className="w-52 h-52">
          <Pie data={data} options={options} />
        </div>
              <div className='border-l'></div>
        {/* Reduce the width here using Tailwind classes */}
        <div className="w-48 h-48">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="mt-4 flex justify-around text-sm text-gray-700">
        {data.labels.map((label, index) => (
          <div key={label} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
};

export default PieChartWithLabels;