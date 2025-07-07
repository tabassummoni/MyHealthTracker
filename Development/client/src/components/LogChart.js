import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

function LogChart({ logs }) {
  const labels = logs.map(log => new Date(log.date).toLocaleDateString());
  const waterData = logs.map(log => log.water);

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', marginBottom: '20px' }}>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Water Intake (ml)',
              data: waterData,
              backgroundColor: 'skyblue'
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}

export default LogChart;
