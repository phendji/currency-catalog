import { Injectable } from '@angular/core';
import { MOCK_CURRENCIES_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Currencies } from '../interfaces/currencies';
import { filter } from 'rxjs/operators';

@Injectable()
export class CurrenciesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCurrencies() {
    const foobar = this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
    return foobar;

  }

  public getCurrenciesTypeAny() {
    const foobar = this.httpClient.get(MOCK_CURRENCIES_URL);
    return foobar;
  }

  private getCurrencyById(id: string) {
    return this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
    // const foobar = this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
    // const foobarFilter = foobar.pipe(filter(ele => ele.id === id));
    // const tests = foobarFilter.subscribe(val => console.log(`Over 30: ${val}`));
    // return foobarFilter;
  }
}
