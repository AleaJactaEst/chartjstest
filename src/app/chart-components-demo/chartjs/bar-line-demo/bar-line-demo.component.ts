import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'exo-bar-line-demo',
  templateUrl: './bar-line-demo.component.html',
  styleUrls: ['./bar-line-demo.component.scss']
})
export class BarLineDemoComponent implements OnInit {
  chartData!: ChartData;
  chartType: ChartType = 'bar';
  chartOptions!: ChartOptions;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chartOptions = {
      responsive: true,
      scales: {
        x: {
          display: false,
        },

        y: {
          display: false,
        },
      },
      elements: {
        line: {
          tension: 0.5,
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(231,239,246,0.91)',
          titleColor: 'black',
          bodyColor: 'black',
          xAlign: 'center',
          displayColors: false
        }
      },
    };

    this.chartData = {
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      datasets: [
        {
          label: 'Company Dataset 1',
          data: [...Array(12)].map(e=>Math.random()*100),
          borderColor: '#7BB4EBFF',
          backgroundColor: '#7BB4EBFF',
          order: 1,
        },
        {
          label: 'Company Dataset 2',
          data: [...Array(12)].map(e=>Math.random()*100),
          borderColor: '#333',
          pointBackgroundColor: '#333',
          pointBorderColor: '#333',
          pointHoverRadius: 6,
          pointHoverBorderColor: 'rgba(51,51,51,0.52)',
          pointHoverBorderWidth: 8,
          type: 'line',
          order: 0,
        },
      ],
    };
  }
}
