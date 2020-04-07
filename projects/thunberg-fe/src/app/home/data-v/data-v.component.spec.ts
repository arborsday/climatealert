import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVComponent } from './data-v.component';

describe('DataVComponent', () => {
  let component: DataVComponent;
  let fixture: ComponentFixture<DataVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
