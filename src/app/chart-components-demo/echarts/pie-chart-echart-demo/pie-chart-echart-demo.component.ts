import { Component, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'exo-pie-chart-echart-demo',
  templateUrl: './pie-chart-echart-demo.component.html',
  styleUrls: ['./pie-chart-echart-demo.component.scss']
})
export class PieChartEchartDemoComponent {
  @ViewChild('chart') chart!: NgxEchartsDirective;
  //link: https://echarts.apache.org/examples/en/editor.html?c=pie-simple&lang=ts
  chartOption: EChartsOption = {
    animation: false,
    axisPointer: [
      {
        show: false,
        shadowStyle: {
          color: 'rgb(0,83,255)'
        },
        handle: {
          color: 'rgb(0,83,255)'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      borderRadius: 4,
      backgroundColor: 'rgba(231,239,246,0.91)',
      formatter: function (params: any) {
        console.log('params:', params);

        return `<span><strong>${params.data.name}</strong><br>Price: ${params.value}$</span>`;
      }
    },
    color: [
      '#ef5c7f',
      '#7f84e8',
      '#e3d254',
      '#7bb4eb',
      '#434348',
      '#8feb7c',
      '#f5a25c',
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '80%',
        data: [
          { value: Math.round(Math.random() * 100), name: 'Banner - 728x90' },
          { value: Math.round(Math.random() * 100), name: 'Banner - 300x100' },
          { value: Math.round(Math.random() * 100), name: 'Mobile - 300x100' },
          { value: Math.round(Math.random() * 100), name: 'Native Ad - 300x300' },
          { value: Math.round(Math.random() * 100), name: 'Banner - 900x250' },
          { value: Math.round(Math.random() * 100), name: 'Popunders' },
          { value: Math.round(Math.random() * 100), name: 'Banner - 720x90' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
          scale: false,
        },
        animationDuration: 0,
      }
    ]
  };

}
