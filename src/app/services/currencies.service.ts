import { Injectable } from '@angular/core';
import { MOCK_CURRENCIES_URL } from '../constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Currencies } from '../interfaces/currencies';

import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';

@Injectable()
export class CurrenciesService {

  private configServer: any;
  private baseUrl: string;
  private apiVersion: string;
  private apiName: string;
  private contentType: string;

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private configService: ConfigService
  ) {
    this.configServer = this.configService.serverConfig;

    this.baseUrl      = this.configServer['OPENFINTECH']['BASE_URL'];
    this.apiVersion   = this.configServer['OPENFINTECH']['VERSION'];
    this.apiName          = this.configServer['OPENFINTECH']['API'];
    this.contentType  = this.configServer['OPENFINTECH']['HEADER']['ACCEPT'];
  }

  // public getCurrencies() {
  //   return this.httpClient.get<Currencies>(MOCK_CURRENCIES_URL);
  // }

  // public getCurrencyByIdMock(id: string) {
  //   return this.httpClient.get(MOCK_CURRENCIES_URL).map(posts => (<any>posts).find(post => post.id === id));
  // }

  public getCurrencyById(id: string) {
    let httpOptions = new HttpHeaders();
        httpOptions = httpOptions.append('Content-Type', this.contentType);

    const options = {
      headers: httpOptions
    };

    const url = this.baseUrl + '/' + this.apiVersion + '/' + this.apiName + '/' +  id;

    return this.httpService.get(url, options);
  }

  public getListOfCurrencies(recordsPerPage: number, currentPage: number) {

    let httpOptions = new HttpHeaders();
        httpOptions = httpOptions.append('Content-Type', this.contentType);

    let httpParams = new HttpParams();
        httpParams = httpParams.append('page[number]', String(currentPage));
        httpParams = httpParams.append('page[size]', String(recordsPerPage));

    const options = {
      headers: httpOptions,
      params: httpParams
    };

    const endPoint = this.baseUrl + '/' + this.apiVersion + '/' + this.apiName;

    return this.httpService.get(endPoint, options);
  }

}
