import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function LineGraph(dataset) {
  console.log(dataset.dataset);
  const [data, setData]= useState({
    labels:["jan","Feb", "MAr", "Apr", "May", "Jun","Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"First Dataset",
        data:dataset.dataset,
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
