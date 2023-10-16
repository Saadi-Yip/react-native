// EmployeePerformanceChart.js
import { Radar } from 'react-chartjs-2';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Attendance Management',
    },
  },
};

export default function AttendanceChart({ data }) {
  return <Radar options={options} data={data} />;
}
