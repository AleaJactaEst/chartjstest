import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineDemoComponent } from './bar-line-demo.component';

describe('BarLineDemoComponent', () => {
  let component: BarLineDemoComponent;
  let fixture: ComponentFixture<BarLineDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLineDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
