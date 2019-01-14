import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import '../componentstyles/BaseComponentStyles.css';

export const PriceGraph = (props) => {

  const labels = props.data.map(data => data[0].slice(5, -3)).reverse();
  const pricearr = props.data.map(data => data[1]["4. close"]).reverse();
  const options = {
    annotation: {
      annotations: [
        {
          drawTime: 'afterDatasetsDraw',
          borderColor: 'rgb(102, 229, 102)',
          borderDash: [
            2, 2
          ],
          borderWidth: 2,
          mode: 'horizontal',
          fill: 'rgb(102, 229, 102)',
          value: 10,
          scaleID: 'x-axis-0'
        }
      ]
    },
    maintainAspectRatio: false,
    legend: false
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Price',
        data: pricearr,
        borderColor: ['rgb(102, 229, 102)'],
        fill: 'rgb(102, 229, 102)',
        borderWidth: 3,
        pointRadius: 2
      }
    ]
  }
  return props.data === ["N/A"]
    ? <p>Data Unavailable</p>
    : <div className="Chart">
      <Line data={data} options={options}/>
    </div>
}
