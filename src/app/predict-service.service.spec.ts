import { TestBed } from '@angular/core/testing';

import { PredictServiceService } from './predict-service.service';

describe('PredictServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictServiceService = TestBed.get(PredictServiceService);
    expect(service).toBeTruthy();
  });
});
