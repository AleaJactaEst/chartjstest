import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from './app.constant';
import {
  PieChartDemoComponent,
  BarLineDemoComponent,
  LineChartStackedDemoComponent,
  LineChartStackedEchartDemoComponent,
  PieChartEchartDemoComponent,
  BarLineEchartDemoComponent,
  MapChartDemoComponent,
  MapChartEchartDemoComponent,
} from './chart-components-demo';

const routes: Routes = [
  { path: AppConstants.exoPieChart.path, component: PieChartDemoComponent },
  { path: AppConstants.exoBarLine.path, component: BarLineDemoComponent },
  { path: AppConstants.exoLineChartStacked.path, component: LineChartStackedDemoComponent },
  { path: AppConstants.exoMapChart.path, component: MapChartDemoComponent },
  { path: AppConstants.exoPieChartEcharts.path, component: PieChartEchartDemoComponent },
  { path: AppConstants.exoBarLineEcharts.path, component: BarLineEchartDemoComponent },
  { path: AppConstants.exoLineChartStackedEcharts.path, component: LineChartStackedEchartDemoComponent },
  { path: AppConstants.exoMapChartEcharts.path, component: MapChartEchartDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
