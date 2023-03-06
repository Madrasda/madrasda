import {useState} from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function PieChart() {
  const data = {
    labels: [
      'Vikram Kamal T-shirt',
      'Vikram Rolex Hoodies',
      'Uthama villain hoodies',
      'Vikram Kamal Shirts',
      'LCU TRIO Shorts',
      'LCU TRIO Shirts',
      'LCU V-neck T-shirt',
      'Vikram Title Shirt'
    ],
    datasets: [{
      label: 'Product Contribution',
      data: [44,35,5,31,29,17,7,22],
      backgroundColor: [
        '#560B21',
        '#821031',
        '#AE1541',
        '#CB184C',
        '#E73E6F',
        '#EC6A8F',
        '#F18EAA',
        '#FADEE6',
      ],
      hoverOffset: 4
    }]
  };
  return (
    <div className="text-black w-[500px] h-[500px]">
      <Doughnut data={data}>Hello</Doughnut>
    </div>
  );
}

// style={{width:'500px', height:'500px'}}