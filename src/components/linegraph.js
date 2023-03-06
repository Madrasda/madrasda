import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function LineGraph() {
  const [data, setData]= useState({
    labels:["5","10", "15", "20", "25", "30"],
    datasets:[
      {
        label:"First Dataset",
        data:[10, 20, 5, 14, 32, 2,],
        borderColor:"#A5153F",
        showLine:true
      }
    ]
  })
  return (
    <div className="w-[800px] h-[800px]" >
      <Line data={data}>Hello</Line>
    </div>
  );
}

// style={{width:'800px', height:'800px'}}
