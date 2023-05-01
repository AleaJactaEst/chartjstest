import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChartDemoComponent } from './map-chart-demo.component';

describe('MapchartComponent', () => {
  let component: MapChartDemoComponent;
  let fixture: ComponentFixture<MapChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapChartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
