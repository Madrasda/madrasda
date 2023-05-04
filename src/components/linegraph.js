import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function LineGraph(props) {
  const [data, setData]= useState({
    labels:["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"Your Monthly Sales for the year " + new Date().getFullYear(),
        data: (props.monthlySales ? props.monthlySales.slice(0, new Date().getMonth() + 1) : [0,0,0,0,0,0,0,0,0]),
        borderColor:"#FCC900",
        backgroundColor:"#FFFFFF",
        showLine:true
      }
    ]
  });

  const maxDataValue = Math.max(...data.datasets[0].data);

  const options = {
    scales: {
      y: {
        suggestedMax: maxDataValue * 1.2, 
        ticks: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  };

  return (
    <div className="w-[380px] md:w-[800px] h-[800px] my-12 md:my-0" >
      <Line data={data} options={options} />
    </div>
  );
}
