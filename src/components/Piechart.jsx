import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWithLabels = () => {
  const data = {
    labels: ['Career guidance', 'Academics', 'Buisness', 'Discipleship', 'Personal development'],
    datasets: [
      {
        data: [30, 15, 25, 10, 20], // Non-equal data values
        backgroundColor: [
          '#F87171', '#FBBF24', '#4ADE80', '#60A5FA', '#A855F7',
        ],
        borderColor: [
          '#DC2626', '#D97706', '#16A34A', '#2563EB', '#8B5CF6',
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
      <div className="w-full bg-white dark:bg-gray-800  shadow-md p-8">
        <div className="flex justify-center space-x-20"> {/* Center the pies horizontally */}
          {/* Reduce the width here using Tailwind classes */}
          <div className="w-44 h-44">
            <h1 className='pb-4'>Top Choice For Mentor</h1>
            <Pie data={data} options={options} />
          </div>
          <div className='border-l mt-5 -mb-10'></div>
          {/* Reduce the width here using Tailwind classes */}
          <div className="w-44 h-44">
            <h1 className='pb-4'>Top Choice For Mentee</h1>
            <Pie data={data} options={options} />
          </div>
        </div>
        {/* Added pt-4 here */}
        <div className="mt-9 pt-4 flex justify-around text-sm text-gray-700">
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