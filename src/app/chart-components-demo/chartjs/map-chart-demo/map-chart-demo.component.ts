import { Component, OnInit } from '@angular/core';
import { Chart, ChartType} from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo';
const ChartGeo = require('chartjs-chart-geo');

const worldMapPath = 'assets/data/countries-50m.json';

@Component({
  selector: 'exo-map-chart-demo',
  templateUrl: './map-chart-demo.component.html',
  styleUrls: ['./map-chart-demo.component.scss']
})
export class MapChartDemoComponent implements OnInit {
  chartData!: any; // ChartData
  chartOptions: any;
  chartType!: ChartType;
  pieChartPlugins: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    // register controller in chart.js and ensure the defaults are set
    Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale);
    this.getWorldMap().subscribe((cntrs: any) => {
      const countries = ChartGeo.topojson.feature(cntrs, cntrs.objects.countries).features;

      this.chartType = 'choropleth';
      this.chartOptions = {
        showOutline: false,
        showGraticule: false,
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
          },
        },
        scales: {
          projection: {
            display: false,
            axis: 'x',
            projection: 'equirectangular'
          },
          color: {
            axis: 'x',
            quantize: 5,
            interpolate: ['#dceff6', '#078ec7'],
            legend: {
              position: 'bottom',
              align: 'bottom'
            },
          }
        },
      };
      this.chartData = {
        labels: countries.map((d:any) => d.properties.name),
        datasets: [{
          label: 'Countries',
          data: countries.map((d:any) => ({feature: d, value: Math.random() * 1000})),
          hoverBackgroundColor: 'rgb(185,217,85)',
        }],
      };
    })
  }

  /**
   * Get the json data to generate highmaps world map
   */
  getWorldMap() {
    return this.http.get(worldMapPath);
  }
}
