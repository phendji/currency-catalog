import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { Currencies } from '../interfaces/currencies';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public currencies: any;
  public titlePage: string;

  constructor(
    private currenciesService: CurrenciesService
  ) {
    this.titlePage = 'Available currencies';
  }

  ngOnInit() {
    this.getCurrencies();
  }

  private getCurrencies() {
    this.currenciesService.getListOfCurrencies().subscribe(res => {
      console.log('currencies :', res);
      this.currencies = res['data'];
    });
  }
}
