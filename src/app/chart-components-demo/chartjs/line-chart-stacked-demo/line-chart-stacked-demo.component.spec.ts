import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartStackedDemoComponent } from './line-chart-stacked-demo.component';

describe('LineChartStackedComponent', () => {
  let component: LineChartStackedDemoComponent;
  let fixture: ComponentFixture<LineChartStackedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartStackedDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartStackedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
