import {useState} from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function PieChart({products, prodData}) {
  const data = {
    labels: products,
    datasets: [{
      label: 'Product Contribution',
      data: prodData,
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