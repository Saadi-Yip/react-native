// EmployeeCountChart.js
import { Line } from 'react-chartjs-2';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Clients Satisfaction',
    },
  },
};

export default function ClientSatisfaction({ data }) {
  return <Line options={options} data={data} className='min-h-full'/>;
}
