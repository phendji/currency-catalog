import { Injectable } from '@angular/core';
import { MOCK_CURRENCIES_URL, BASE_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Currencies } from '../interfaces/currencies';

import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class CurrenciesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCurrencies() {
    return this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
  }

  public getCurrencyById(id: string) {
    return this.httpClient.get(MOCK_CURRENCIES_URL).map(posts => (<any>posts).find(post => post.id === id));
  }
  // public getListOfCurrencies() {
  //   return this.httpClient.get(BASE_URL);
  //   return this.httpService.post(this.servers.INDEX.url + indexURL + '/_search', Query);
  // }
}
