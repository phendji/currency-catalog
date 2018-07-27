import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { Currencies } from '../interfaces/currencies';  // not use
import { Pagination } from '../interfaces/pagination';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public currencies: any;
  public titlePage: string;
  public paginationConfig: Pagination;

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
  }

  ngOnInit() {
    this.getCurrenciesWithParams(this.paginationConfig.recordsPerPage, this.paginationConfig.currentPage);
  }

  private getCurrenciesWithParams(recordsPerPage: number, currentPage: number) {
    this.currenciesService.getListOfCurrencies(recordsPerPage, currentPage).subscribe(res => {
      console.log('currencies :', res);
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

  public searchCurrencies(event: any) {
    const pagination = event;
    this.getCurrenciesWithParams(pagination.recordsPerPage, pagination.currentPage);
  }
}
