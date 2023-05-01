import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartStackedEchartDemoComponent } from './line-chart-stacked-echart-demo.component';

describe('LineChartStackedEchartDemoComponent', () => {
  let component: LineChartStackedEchartDemoComponent;
  let fixture: ComponentFixture<LineChartStackedEchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartStackedEchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartStackedEchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
