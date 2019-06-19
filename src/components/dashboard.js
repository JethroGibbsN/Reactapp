import React, { Component } from 'react'
import { Bar,Pie,Line } from 'react-chartjs-2';

export class Dashboard extends Component {
  render() {
    var data = {
        labels: ['Gibbs', 'Tony', 'Ziva', 'McGee', 'Bishop', 'Torres', 'Abby'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ] ,
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [95, 90, 83, 81, 79, 78, 77,80]
          }
        ]
      };
    return (
      <div>
          <h1 align="center">Bar representation </h1><br />
          <div className="Bar"><Bar data={data} /></div><hr /><br />
          <h1 align="center">Pie representation </h1><br />
        <div className="Pie"><Pie data={data} /></div><hr /><br />
        <h1 align="center">Line representation </h1><br />
        <div className="Line"><Line data={data} /></div><hr />
      </div>
      );
    }
  }