import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CurrenciesService,
    HttpService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
