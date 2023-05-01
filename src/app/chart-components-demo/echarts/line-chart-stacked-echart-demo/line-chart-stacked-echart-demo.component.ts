import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'exo-line-chart-stacked-echart-demo',
  templateUrl: './line-chart-stacked-echart-demo.component.html',
  styleUrls: ['./line-chart-stacked-echart-demo.component.scss']
})
export class LineChartStackedEchartDemoComponent {
  // link: https://echarts.apache.org/examples/en/editor.html?c=area-stack
  colors = {
    purple: {
      fill: 'rgba(242,242,242,0.47)',
      stroke: '#c0c0c0',
    },
    red: {
      fill: 'rgba(244,226,227,0.47)',
      stroke: '#e99f9f',
    },
    green: {
      fill: 'rgba(224,238,227,0.47)',
      stroke: '#99da86',
    },
  };

  firstChartOptions: EChartsOption = {
    color: [
      'rgba(129,126,126,0.47)',
      'rgba(234,145,147,0.47)',
    ],
    tooltip: {
      trigger: 'axis',
      showDelay: 0,
      transitionDuration: 0.2,
      borderRadius: 4,
      backgroundColor: 'rgba(231,239,246,0.91)',
    },
    axisPointer: {
      show: true,
      type: 'none',
      lineStyle: {
        width: 0,
      },
      triggerTooltip: false,
      label: {
        show: false
      }
    },
    grid: [
      {
        show: false
      }
    ],
    xAxis: {
      show: false,
      type: 'category',
      data: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [...Array(12)].map(e=>Math.random()*10),
        type: 'line',
        areaStyle: {},
        silent: true, // <---- here
        symbol: 'circle',
        symbolSize: 3,
        lineStyle: {
          color: '#c0c0c0'
        }
      },
      {
        data: [...Array(12)].map(e=>Math.random()*10),
        type: 'line',
        areaStyle: {},
        silent: true, // <---- here
        symbol: 'circle',
        symbolSize: 3,
        lineStyle: {
          color: '#e99f9f'
        }
      },
    ]
  };

  secondChartOptions: EChartsOption = {
    color: [
      'rgba(129,126,126,0.47)',
      'rgba(178,241,185,0.47)',
    ],
    tooltip: {
      trigger: 'axis',
      showDelay: 0,
      transitionDuration: 0.2,
      borderRadius: 4,
      backgroundColor: 'rgba(231,239,246,0.91)'
    },
    axisPointer: {
      show: true,
      type: 'none',
      lineStyle: {
        width: 0,
      },
      triggerTooltip: false,
      label: {
        show: false
      }
    },
    grid: [
      {
        show: false
      }
    ],
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [...Array(12)].map(e=>Math.random()*10),
        type: 'line',
        areaStyle: {},
        silent: true,
        symbol: 'circle',
        symbolSize: 3,
        lineStyle: {
          color: '#c0c0c0'
        }
      },
      {
        data: [...Array(12)].map(e=>Math.random()*10),
        type: 'line',
        areaStyle: {},
        silent: true,
        symbol: 'circle',
        symbolSize: 3,
        lineStyle: {
          color: '#99da86'
        }
      }
    ]
  };
}
