import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineEchartDemoComponent } from './bar-line-echart-demo.component';

describe('BarLineEchartDemoComponent', () => {
  let component: BarLineEchartDemoComponent;
  let fixture: ComponentFixture<BarLineEchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLineEchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLineEchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
