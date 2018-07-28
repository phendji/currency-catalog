import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { Pagination } from '../interfaces/pagination';
import { Criteria } from '../interfaces/criteria';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public currencies: any;
  public titlePage: string;
  public paginationConfig: Pagination;
  private criteria: Criteria;

  constructor(
    private currenciesService: CurrenciesService
  ) {
    this.titlePage = 'Available currencies';
    this.paginationConfig = {
      recordsPerPageOptions: [10, 50, 100],
      recordsPerPage: 10,
      totalRecords: null,
      totalPages: null,
      currentPage: 1,
      firstPage: null,
      prevPage: null,
      nextPage: null,
      lastPage: null
    };

    this.criteria = { filters: null, page: { currentPage: 1, recordsPerPage: 10 } };
  }

  ngOnInit() {
    this.getCurrencies(this.criteria);
  }

  private getCurrencies(criteria: Criteria) {
    this.currenciesService.getListOfCurrencies(criteria).subscribe(res => {
      this.paginationConfig = this.updatePaginationConfig(res);
      this.currencies = res['data'];
    });
  }

  private updatePaginationConfig(res: any): Pagination {
    let paginationConfig: Pagination;

    paginationConfig = {
      recordsPerPageOptions: this.paginationConfig.recordsPerPageOptions,
      recordsPerPage: this.paginationConfig.recordsPerPage,
      totalRecords: res['meta']['total'],
      totalPages: res['meta']['pages'],
      currentPage: this.paginationConfig.currentPage,
      firstPage: this.getNumPage(res, 'first'),
      prevPage: this.getNumPage(res, 'prev'),
      nextPage: this.getNumPage(res, 'next'),
      lastPage: this.getNumPage(res, 'last')
    };

    return paginationConfig;
  }

  private getNumPage(res: any, nav: string) {
    return (res['links'][nav] !== undefined) ? +res['links'][nav].split('page[number]=')[1].split('&')[0] : null;
  }

  public searchCurrenciesByPage(event: any) {
    const pagination = event;
    this.criteria.page.currentPage = pagination.currentPage;
    this.criteria.page.recordsPerPage = pagination.recordsPerPage;
    this.getCurrencies(this.criteria);
  }

  public searchCurrenciesByFilters(event: any) {
    const filters = event;
    this.criteria.filters = filters;
    this.criteria.page.currentPage = 1;
    this.criteria.page.recordsPerPage = 10;
    this.getCurrencies(this.criteria);
  }
}
