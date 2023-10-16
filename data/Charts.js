import { FaUser, FaProjectDiagram, FaMoneyCheckDollar, FaCalendar, FaTasks, FaChartBar, FaFile, FaEnvelope } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
const departmentSalaryData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Development',
      data: [10000, 61000, 32000, 83000, 64000, 15000, 46000, 67000, 38000, 29000, 70000, 91000],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Administration',
      data: [25000, 46000, 27000, 58000, 19000, 60000, 31000, 52000, 73000, 34000, 45000, 66000],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Telecommunication',
      data: [58000, 59000, 60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const revenueData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [{
    label: 'Weekdays',
    data: [30, 50, 12, 34, 23, 67],
    backgroundColor: 'rgba(75, 192, 192, 0.5)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    tension: 0.4
  }]
}
// Dummy data for Employee Performance Chart
const employeePerformanceData = {
  labels: ['Skill A', 'Skill B', 'Skill C', 'Skill D', 'Skill E'],
  datasets: [
    {
      label: 'Employee Performance',
      data: [80, 90, 70, 85, 75],
      backgroundColor: 'rgb(26, 80, 137)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

// Dummy data for Client Satisfaction Chart
const clientSatisfactionData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Client Satisfaction',
      data: [80, 85, 90, 88],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

// Dummy data for Attendance Chart
const attendanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Weekly',
      data: [15, 92, 44, 93, 76, 91],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',

    },
  ],
};


const icons = [
  { icon: <GrUserWorker size={32} />, label: 'Employee', link: '/profile', total: '200' },
  { icon: <FaTasks size={32} />, label: 'Tasks', link: '/tasks',total: '154'  },
  { icon: <FaProjectDiagram size={32} />, label: 'Projects', link: '/settings', total: '54' },
  { icon: <FaEnvelope size={32} />, label: 'Earning', link: '/jobs', total: '5000 $' },
  // { icon: <FaChartBar size={32} />, label: 'Clients', link: '/analytics',  total: '26' }, 
];

const projects = [
  {
    id: 1,
    clientName: 'Client A',
    team: [
      { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project X',
    projectCost: '$10,000',
    projectCompleted: 80,
    payment: 'Paid',
    status: 'Done',
  },
  {
    id: 2,
    clientName: 'Client B',
    team: [
      { id: 3, name: 'Alice Johnson', avatar: 'https://via.placeholder.com/50' },
      { id: 4, name: 'Bob Williams', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project Y',
    projectCost: '$15,000',
    projectCompleted: 45,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 3,
    clientName: 'Client C',
    team: [
      { id: 5, name: 'Eve Davis', avatar: 'https://via.placeholder.com/50' },
      { id: 6, name: 'Chris Brown', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project Z',
    projectCost: '$8,500',
    projectCompleted: 60,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 4,
    clientName: 'Client D',
    team: [
      { id: 7, name: 'Grace Lee', avatar: 'https://via.placeholder.com/50' },
      { id: 8, name: 'Tom Clark', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project M',
    projectCost: '$12,300',
    projectCompleted: 75,
    payment: 'Paid',
    status: 'Done',
  },
  {
    id: 5,
    clientName: 'Client E',
    team: [
      { id: 9, name: 'Sam Johnson', avatar: 'https://via.placeholder.com/50' },
      { id: 10, name: 'Laura Smith', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project K',
    projectCost: '$9,800',
    projectCompleted: 90,
    payment: 'Paid',
    status: 'Done',
  },
  {
    id: 6,
    clientName: 'Client F',
    team: [
      { id: 11, name: 'Michael Brown', avatar: 'https://via.placeholder.com/50' },
      { id: 12, name: 'Sarah Davis', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project L',
    projectCost: '$11,200',
    projectCompleted: 70,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 7,
    clientName: 'Client G',
    team: [
      { id: 13, name: 'Emma Lee', avatar: 'https://via.placeholder.com/50' },
      { id: 14, name: 'Jack Clark', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project N',
    projectCost: '$7,600',
    projectCompleted: 85,
    payment: 'Paid',
    status: 'Done',
  },
  {
    id: 8,
    clientName: 'Client H',
    team: [
      { id: 15, name: 'Oliver Johnson', avatar: 'https://via.placeholder.com/50' },
      { id: 16, name: 'Ava Williams', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project P',
    projectCost: '$13,700',
    projectCompleted: 50,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 9,
    clientName: 'Client I',
    team: [
      { id: 17, name: 'Liam Brown', avatar: 'https://via.placeholder.com/50' },
      { id: 18, name: 'Mia Davis', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project Q',
    projectCost: '$14,900',
    projectCompleted: 65,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 10,
    clientName: 'Client J',
    team: [
      { id: 19, name: 'Ethan Lee', avatar: 'https://via.placeholder.com/50' },
      { id: 20, name: 'Sophia Clark', avatar: 'https://via.placeholder.com/50' },
    ],
    projectName: 'Project R',
    projectCost: '$16,500',
    projectCompleted: 75,
    payment: 'Paid',
    status: 'Done',
  },
];




module.exports = { departmentSalaryData, revenueData, icons, clientSatisfactionData, attendanceData, employeePerformanceData, projects }