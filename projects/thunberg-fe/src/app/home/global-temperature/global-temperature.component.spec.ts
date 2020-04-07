import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTemperatureComponent } from './global-temperature.component';

describe('GlobalTemperatureComponent', () => {
  let component: GlobalTemperatureComponent;
  let fixture: ComponentFixture<GlobalTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
