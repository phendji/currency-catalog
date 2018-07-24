import { TestBed, inject } from '@angular/core/testing';

import { CurrenciesService } from './currencies.service';
import { HttpClientModule } from '@angular/common/http';

describe('CurrenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [CurrenciesService]
    });
  });

  it('should be created', inject([CurrenciesService], (service: CurrenciesService) => {
    expect(service).toBeTruthy();
  }));
});
