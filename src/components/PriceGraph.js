import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import '../componentstyles/BaseComponentStyles.css';

export default class PriceGraph extends Component {
  render() {
    if (this.props.data === ["N/A"]) {
      return <p>Data Unavailable</p>
    }
    let labels = this.props.data.map(data => data[0].slice(5, -3)).reverse();
    let pricearr = this.props.data.map(data => data[1]["4. close"]).reverse();
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
    return (<div className="Chart">
      <Line data={data} options={options}/>
    </div>)
  }
}
