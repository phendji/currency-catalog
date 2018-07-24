import { Injectable } from '@angular/core';
import { MOCK_CURRENCIES_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Currencies } from '../interfaces/currencies';

@Injectable()
export class CurrenciesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCurrencies() {
    return this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
  }

}
