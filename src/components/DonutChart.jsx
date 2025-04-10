import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Call  75%', 'Chat  25%'],
    datasets: [
      {
        data: [75, 25], // Adjusted data to match labels
        backgroundColor: ['#6366F1', '#0EA5E9'],
        borderColor: ['#4F46E5', '#0284C7'],
        borderWidth: 1,
        cutout: '70%',
      },
    ],
  };

  const data1 = {
    labels: ['Complete sessions', 'Ongoing sessions'],
    datasets: [
      {
        data: [40, 30],
        backgroundColor: ['#6366F1', '#0EA5E9'],
        borderColor: ['#4F46E5', '#0284C7'],
        borderWidth: 1,
        cutout: '70%',
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
            const value = context.dataset.data[context.dataIndex];
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className='flex w-full'>
      <div className="w-full bg-white dark:bg-gray-800 shadow-md px-8 py-8">
        <div className="flex justify-center space-x-10 px-5">
          <div className="w-1/2">
            <h1 className='text-left pb-5 pt-2 font-semibold text-sm'>Activity</h1>
            <div className=" w-48">
              <Doughnut data={data} options={options} />
            </div>
            {/* Custom labels for the first chart */}
            <div className="flex justify-around text-sm text-gray-700 mt-2 pb-5 dark:text-white">
              {data.labels.map((label, index) => (
                <div key={`activity-label-${index}`} className="flex items-center justify-center w-full">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                  ></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='border-l mt-8 mb-10'></div>
          <div className="w-1/2">
            <h1 className='text-right pb-5 pt-2 font-semibold text-sm'>This Week</h1>
            <div className="w-48">
              <Doughnut data={data1} options={options} />
            </div>
            {/* Custom labels for the second chart */}
            <div className="flex justify-around text-[11px] text-gray-700 mt-2 dark:text-white">
              {data1.labels.map((label, index) => (
                <div key={`week-label-${index}`} className="flex items-center w-full">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: data1.datasets[0].backgroundColor[index] }}
                  ></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;