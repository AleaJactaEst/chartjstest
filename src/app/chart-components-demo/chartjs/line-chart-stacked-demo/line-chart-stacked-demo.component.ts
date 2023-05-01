import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'exo-line-chart-stacked-demo',
  templateUrl: './line-chart-stacked-demo.component.html',
  styleUrls: ['./line-chart-stacked-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartStackedDemoComponent implements OnInit {
  @ViewChild(BaseChartDirective, { read: BaseChartDirective, static: false }) chart?: BaseChartDirective;

  firstChartData: any;
  secondChartData: any;
  chartOptions: any;
  chartType: ChartType = 'line';

  colors = {
    purple: {
      fill: 'rgba(242,242,242,0.47)',
      stroke: '#c0c0c0',
      border: 'rgba(192,192,192,0.6)',
    },
    red: {
      fill: 'rgba(244,226,227,0.47)',
      stroke: '#e99f9f',
      border: 'rgba(233,159,159,0.6)',
    },
    green: {
      fill: 'rgba(224,238,227,0.47)',
      stroke: '#99da86',
      border: 'rgba(153,218,134,0.6)',
    },
  };

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.firstChartData = {
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      datasets: [
        {
          label: 'Gray dataset',
          lineTension: .1,
          data: [...Array(12)].map(e=>Math.random()*10),
          backgroundColor: this.colors.purple.fill,
          pointBackgroundColor: this.colors.purple.stroke,
          pointBorderColor: this.colors.purple.border,
          borderColor: this.colors.purple.stroke,
          fill: true
        },
        {
          label: 'Green dataset',
          lineTension: .1,
          data: [...Array(12)].map(e=>Math.random()*10),
          backgroundColor: this.colors.green.fill,
          pointBackgroundColor: this.colors.green.stroke,
          pointBorderColor: this.colors.green.border,
          borderColor: this.colors.green.stroke,
          fill: true
        },
      ],
    };

    this.secondChartData = {
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      datasets: [
        {
          label: 'Gray dataset',
          lineTension: .1,
          data: [...Array(12)].map(e=>Math.random()*10),
          backgroundColor: this.colors.purple.fill,
          pointBackgroundColor: this.colors.purple.stroke,
          pointBorderColor: this.colors.purple.border,
          borderColor: this.colors.purple.stroke,
          fill: true
        },
        {
          label: 'Red dataset',
          lineTension: .1,
          data: [...Array(12)].map(e=>Math.random()*10),
          backgroundColor: this.colors.red.fill,
          pointBackgroundColor: this.colors.red.stroke,
          pointBorderColor: this.colors.red.border,
          borderColor: this.colors.red.stroke,
          fill: true
        },
      ],
    };


    this.chartOptions = {
      responsive: true,
      plugins: {
        tooltip: {
          mode: 'index',
          usePointStyle: true,
          boxHeight: 5,
          backgroundColor: 'rgb(242,242,242)',
          titleColor: 'black',
          bodyColor: 'black',
          xAlign: 'center',
          callbacks: {
            title : () => null
          }
        },
        legend: {
          display: false
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          stacked: false,
        }
      },
      elements: {
        point: {
          pointStyle: 'circle',
          pointBorder: 12,
          pointRadius: 0,
        }
      }
    };
  }
}
