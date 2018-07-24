import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
