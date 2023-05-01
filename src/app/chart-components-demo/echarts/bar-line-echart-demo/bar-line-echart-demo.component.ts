import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'exo-bar-line-echart-demo',
  templateUrl: './bar-line-echart-demo.component.html',
  styleUrls: ['./bar-line-echart-demo.component.scss']
})
export class BarLineEchartDemoComponent {

  categories = (function () {
    let now = new Date();
    const res = [];
    let len = 10;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }
    return res;
  })();
  categories2 = (function () {
    const res = [];
    let len = 10;
    while (len--) {
      res.push(10 - len - 1);
    }
    return res;
  })();

  data: number[] = (function () {
    const res = [];
    let len = 10;
    while (len--) {
      res.push(Math.round(Math.random() * 1000));
    }
    return res;
  })();
  data2: number[] = (function () {
    const res = [];
    let len = 0;
    while (len < 10) {
      res.push(+(Math.random() * 10 + 5).toFixed(1));
      len++;
    }
    return res;
  })();

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      showDelay: 0,
      transitionDuration: 0.2,
      borderRadius: 4,
      backgroundColor: 'rgba(231,239,246,0.91)',
      formatter: function (params: any) {
        console.log('params:', params);
        const firstColorSpan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[0].color + '"></span>';
        const secondColorSpan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[1].color + '"></span>';
        return `<span>
          <strong>Some custom title</strong>
          <br>${firstColorSpan} ${params[0].seriesName}: ${params[0].value}$
          <br>${secondColorSpan} ${params[1].seriesName}: ${params[1].value}$
        </span>`;
      }
    },
    color: [
      '#7BB4EBFF',
      '#333'
    ],
    xAxis: [
      {
        show: false,
        data: this.categories
      },
      {
        show: false,
        data: this.categories2
      }
    ],
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
    yAxis: [
      {
        show: false,
      },
      {
        show: false,
      }
    ],
    series: [
      {
        name: 'Bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: this.data
      },
      {
        name: 'Line',
        type: 'line',
        data: this.data2,
        smooth: true,
        symbol: 'circle',
        symbolSize: 9,
        showSymbol: true,
        legendHoverLink: true,
        endLabel: {
          show: false,
          valueAnimation: true,
          distance: 8,
        },
      },
    ]
  };
}
