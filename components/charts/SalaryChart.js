import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function SalaryChart({ data }) {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null);

  useEffect(() => { 
    if (chartRef.current && data) { 
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
 
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              min: 5000,  
              max: 100000,  
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} id="salary" className = ' min-h-full'/>;
}

export default SalaryChart;
