import { TestBed, inject } from '@angular/core/testing';

import { CurrenciesService } from './currencies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';

describe('CurrenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ConfigService, HttpService, CurrenciesService]
    });
  });

  it('should be created', inject([HttpTestingController, HttpService, ConfigService, CurrenciesService],
    (httpClient: HttpTestingController, service: CurrenciesService) => {
    expect(service).toBeTruthy();
  }));
});
