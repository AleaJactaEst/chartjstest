import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartEchartDemoComponent } from './pie-chart-echart-demo.component';

describe('PieChartEchartDemoComponent', () => {
  let component: PieChartEchartDemoComponent;
  let fixture: ComponentFixture<PieChartEchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartEchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartEchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
