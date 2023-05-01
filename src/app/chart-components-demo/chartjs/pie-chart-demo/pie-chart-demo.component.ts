import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartData } from 'chart.js/dist/types';

@Component({
  selector: 'exo-pie-chart-demo',
  templateUrl: './pie-chart-demo.component.html',
  styleUrls: ['./pie-chart-demo.component.scss']
})
export class PieChartDemoComponent implements OnInit {
  chartData!: ChartData;
  chartOptions: ChartOptions = {};
  chartType: ChartType = 'pie';
  pieChartPlugins: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.pieChartPlugins = [{
      id: "pieLabelsLine",
      afterDraw(chart: any) {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;

        const cx = chart._metasets[0].data[0].x;
        const cy = chart._metasets[0].data[0].y;

        const sum = chart.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);

        chart.data.datasets.forEach((dataset: any, i: any) => {
          chart.getDatasetMeta(i).data.forEach((datapoint: any, index: any) => {
            const { x: a, y: b } = datapoint.tooltipPosition();

            const x = 2 * a - cx;
            const y = 2 * b - cy;

            // draw line
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const xLine = x >= halfWidth ? x + 20 : x - 20;
            const yLine = y >= halfHeight ? y + 20 : y - 20;

            const extraLine = x >= halfWidth ? 10 : -10;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.moveTo(x, y);
            ctx.lineTo(xLine, yLine);
            ctx.lineTo(xLine + extraLine, yLine);
            ctx.strokeStyle = (chart.data.datasets[0].backgroundColor[index] || 'black');
            ctx.stroke();

            // text
            const textWidth = ctx.measureText(chart.data.labels[index]).width;
            ctx.font = "12px Arial";
            const textXPosition = x >= halfWidth ? 'left' : 'right';
            const plusFivePx = x >= halfWidth ? 5 : -5;
            ctx.textAlign = textXPosition;
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";

            ctx.fillText(
              chart.data.labels[index],
              xLine + extraLine + plusFivePx,
              yLine
            );
          });
        });
      },
    }];

    this.chartOptions = {
      // clip: 92,
      layout: {
        padding: 85,
        autoPadding: true,
      },
      responsive: true,
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
        labels: [ 'Banner - 728x90', 'Banner - 300x100', 'Mobile - 300x100','Native Ad - 300x300','Banner - 900x250','Popunders','Banner - 720x90' ],
        datasets: [{
          label: 'Salary',
          // clip: 112,
          data: [...Array(6)].map(e=>Math.random()*100),
          backgroundColor: [
            '#ef5c7f',
            '#7f84e8',
            '#e3d254',
            '#7bb4eb',
            '#434348',
            '#8feb7c',
            '#f5a25c',
          ],
          hoverBorderColor: [
            'rgba(239,92,127,0.35)',
            'rgba(127,132,232,0.35)',
            'rgba(227,210,84,0.35)',
            'rgba(123,180,235,0.35)',
            'rgba(67,67,72,0.35)',
            'rgba(143,235,124,0.35)',
            'rgba(245,162,92,0.35)'
          ],
          hoverBorderWidth: 10
        }],
    };
  }
}
