import { TestBed } from '@angular/core/testing';

import { GlobalTemperatureService } from './global-temperature.service';

describe('GlobalTemperatureService', () => {
  let service: GlobalTemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalTemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
