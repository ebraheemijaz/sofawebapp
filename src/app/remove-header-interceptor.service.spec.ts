import { TestBed } from '@angular/core/testing';

import { RemoveHeaderInterceptorService } from './remove-header-interceptor.service';

describe('RemoveHeaderInterceptorService', () => {
  let service: RemoveHeaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveHeaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
