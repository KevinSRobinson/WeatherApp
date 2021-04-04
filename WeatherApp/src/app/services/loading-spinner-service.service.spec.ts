/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadingSpinnerServiceService } from './loading-spinner-service.service';

describe('Service: LoadingSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingSpinnerServiceService]
    });
  });

  it('should ...', inject([LoadingSpinnerServiceService], (service: LoadingSpinnerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
