import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent,
    PaginationComponent,
    PaginationPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
