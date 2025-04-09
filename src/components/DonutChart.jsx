import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Segment 1'],
    datasets: [
      {
        data: [60, 30],
        backgroundColor: ['#6366F1', '#0EA5E9'], // Indigo, Blue, Sky
        borderColor: ['#4F46E5', '#0284C7'],
        borderWidth: 1,
        cutout: '70%', // Creates the donut hole (same option as Pie)
      },
    ],
    };
    
    const data1 = {
    labels: ['Segment 1'],
    datasets: [
      {
        data: [40, 30],
        backgroundColor: ['#6366F1', '#0EA5E9'], // Indigo, Blue, Sky
        borderColor: ['#4F46E5', '#0284C7'],
        borderWidth: 1,
        cutout: '70%', // Creates the donut hole (same option as Pie)
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151', // Tailwind gray-700
          boxWidth: 15,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = data.datasets[0].data[context.dataIndex];
            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Optional: remove borders between segments
      },
    },
    maintainAspectRatio: false, // Allows setting custom width and height
    responsive: true,
  };


  return (
    <div className='flex w-full'>
      <div className="w-full bg-white dark:bg-gray-800  shadow-md ml-4 pb-14">
        <div className="flex justify-center space-x-20"> {/* Center the Doughnuts horizontally */}
          {/* Reduce the width here using Tailwind classes */}
            <div className="w-48 h-48">
                <h1 className='text-left pb-5 pt-2 font-semibold text-sm'>Activity</h1>
                <Doughnut data={data} options={options} />
            </div>
            <div className='border-l mt-5'></div>
                {/* Reduce the width here using Tailwind classes */}
            <div className="w-48 h-48">
                <h1 className='text-right pb-5 pt-2 font-semibold text-sm'>This Week</h1>
                <Doughnut data={data1} options={options} />
            </div>
        </div>
        
      </div>

    </div>
  );
};

export default DonutChart;