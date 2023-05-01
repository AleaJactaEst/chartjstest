import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as worldMap from 'src/assets/data/geojson-world.json';

@Component({
  selector: 'exo-map-chart-echart-demo',
  templateUrl: './map-chart-echart-demo.component.html',
  styleUrls: ['./map-chart-echart-demo.component.scss']
})
export class MapChartEchartDemoComponent implements OnInit {
  //link: https://echarts.apache.org/examples/en/editor.html?c=map-usa&lang=ts
  chartOption: EChartsOption = {};

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    echarts.registerMap('World', worldMap, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5
      },
      'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
      }
    });
    this.chartOption = {
      // title: {
      //   text: 'USA Population Estimates (2012)',
      //   subtext: 'Data from www.census.gov',
      //   sublink: 'http://www.census.gov/popest/data/datasets.html',
      //   left: 'right'
      // },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        borderRadius: 4,
        // extraCssText: 'Network Revenue: ',
        backgroundColor: 'rgba(231,239,246,0.91)'
      },
      visualMap: {
        show: true,
        top: 525,
        left: 'center',
        orient: 'horizontal',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#dceff6',
            '#078ec7',
          ]
        },
        calculable: false,
        indicatorIcon: 'none',
      },
      series: [
        {
          name: 'Some stats',
          type: 'map',
          roam: false,
          map: 'World',
          coordinateSystem: 'geo',
          left: 'center',
          color: [
            '#08326EFF'
          ],
          select: {
            itemStyle: {
              color: 'rgba(255,0,0,0.8)'
            }
          },
          top: 25,
          width: 900,
          height: 900,
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: 'rgb(185,217,85)'
            },
          },
          data: [
            { name: 'Ukraine', value: 4822023 },
            { name: 'United States of America', value: 731449 },
            { name: 'Germany', value: 6553255 },
            { name: 'France', value: 2949131 },
            { name: 'Australia', value: 38041430 },
            { name: 'Brazil', value: 5187582 },
            { name: 'Argentina', value: 3590347 },
            { name: 'Greenland', value: 917092 },
            { name: 'Kazakhstan', value: 632323 },
            { name: 'China', value: 19317568 },
            { name: 'Georgia', value: 9919945 },
            { name: 'Canada', value: 1392313 },
            { name: 'Peru', value: 1595728 },
            { name: 'Mexico', value: 12875255 },
            { name: 'Poland', value: 6537334 },
            { name: 'United Kingdom', value: 3074186 },
            { name: 'Kansas', value: 2885905 },
            { name: 'Ireland', value: 4380415 },
            { name: 'Norway', value: 4601893 },
            { name: 'Sweden', value: 1329192 },
            { name: 'Finland', value: 5884563 },
            { name: 'Spain', value: 6646144 },
            { name: 'Italy', value: 9883360 },
            { name: 'South Africa', value: 5379139 },
            { name: 'India', value: 2984926 },
            { name: 'Indonesia', value: 6021988 },
            { name: 'Chad', value: 1005141 },
            { name: 'Algeria', value: 1855525 },
            { name: 'Switzerland', value: 2758931 },
            { name: 'New Zealand', value: 1320718 },
            { name: 'Turkey', value: 8864590 },
            { name: 'Libya', value: 2085538 },
            { name: 'Madagascar', value: 19570261 },
            { name: 'Saudi Arabia', value: 9752073 },
            { name: 'Colombia', value: 699628 },
            { name: 'Mongolia', value: 11544225 },
            { name: 'Japan', value: 3814820 },
            { name: 'Greece', value: 3899353 },
            { name: 'Moldova', value: 12763536 },
            { name: 'Romania', value: 1050292 },
            { name: 'Portugal', value: 4723723 },
            { name: 'Czech Republic', value: 833354 },
            { name: 'Slovakia', value: 6456243 },
            { name: 'Estonia', value: 26059203 },
            { name: 'Latvia', value: 2855287 },
            { name: 'Lithuania', value: 626011 },
            { name: 'Denmark', value: 8185867 },
            { name: 'Netherlands', value: 6897012 },
            { name: 'West Virginia', value: 1855413 },
            { name: 'Belgium', value: 5726398 },
            { name: 'Austria', value: 576412 },
            { name: 'Iceland', value: 3667084 },
            { name: 'United Arab Emirates', value: 3667084 }
          ]
        }
      ]
    };
  }

}
