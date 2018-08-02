import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpService]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
