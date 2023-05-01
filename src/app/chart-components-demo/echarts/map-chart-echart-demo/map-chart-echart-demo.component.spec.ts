import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChartEchartDemoComponent } from './map-chart-echart-demo.component';

describe('MapChartEchartDemoComponent', () => {
  let component: MapChartEchartDemoComponent;
  let fixture: ComponentFixture<MapChartEchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapChartEchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapChartEchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
