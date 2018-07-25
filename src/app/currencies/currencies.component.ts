import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { Currencies } from '../interfaces/currencies';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public listOfCurrencies: Currencies;

  constructor(
    private currenciesService: CurrenciesService
  ) { }

  ngOnInit() {
    this.getCurrenciesMock();
   // this.getCurrencies();
  }


  private getCurrenciesMock() {
    this.currenciesService.getCurrencies()
      .subscribe((data: Currencies) => {
        this.listOfCurrencies = data;
      });
  }

  // private getCurrencies() {
  //   this.currenciesService.getListOfCurrencies().subscribe(data => {
  //     console.log('data : ', data);
  //   })
  // }
}
