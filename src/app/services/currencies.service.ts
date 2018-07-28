import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { Criteria } from '../interfaces/criteria';

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

  public getCurrencyById(id: string) {
    let httpOptions = new HttpHeaders();
        httpOptions = httpOptions.append('Content-Type', this.contentType);

    const options = {
      headers: httpOptions
    };

    const url = this.baseUrl + '/' + this.apiVersion + '/' + this.apiName + '/' +  id;

    return this.httpService.get(url, options);
  }

  public getListOfCurrencies(criteria: Criteria) {

    let httpOptions = new HttpHeaders();
    let httpParams = new HttpParams();
    let filter: string;

    httpOptions = httpOptions.append('Content-Type', this.contentType);

    httpParams = httpParams.append('page[number]', String(criteria.page.currentPage));
    httpParams = httpParams.append('page[size]', String(criteria.page.recordsPerPage));

    if (criteria.filters !== null) {
      if ( criteria.filters.attribute !== '') {
        filter =  'filter[' + criteria.filters.attribute + ']';
        httpParams = httpParams.append(filter, criteria.filters.text);
      } else {
        httpParams = httpParams.append('filter[search]', criteria.filters.text);
      }
    }

    const options = { headers: httpOptions, params: httpParams };

    const endPoint = this.baseUrl + '/' + this.apiVersion + '/' + this.apiName;

    return this.httpService.get(endPoint, options);
  }


}
