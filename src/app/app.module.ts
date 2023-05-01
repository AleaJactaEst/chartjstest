import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import 'chartjs-chart-geo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PieChartDemoComponent,
  BarLineDemoComponent,
  LineChartStackedDemoComponent,
  LineChartStackedEchartDemoComponent,
  BarLineEchartDemoComponent,
  PieChartEchartDemoComponent,
  MapChartDemoComponent,
  MapChartEchartDemoComponent
} from './chart-components-demo';

@NgModule({
  declarations: [
    AppComponent,
    PieChartDemoComponent,
    BarLineDemoComponent,
    LineChartStackedDemoComponent,
    LineChartStackedEchartDemoComponent,
    BarLineEchartDemoComponent,
    PieChartEchartDemoComponent,
    MapChartDemoComponent,
    MapChartEchartDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section in official docs.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
