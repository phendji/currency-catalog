import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CurrenciesService } from '../services/currencies.service';
import { Currencies } from '../interfaces/currencies';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit {

  public currency: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private currenciesService: CurrenciesService,
    private location: Location
  ) {
    this.currency = null;
  }

  ngOnInit() {
    this.getCurrency();
  }

  private getCurrency() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.currenciesService.getCurrencyById(id).subscribe(res => {
      this.currency = res['data'];
    });
  }

  public goBack() {
    this.location.back();
  }
}
