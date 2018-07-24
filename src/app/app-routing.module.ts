import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';


const appRoutes: Routes = [
  { path: '', component: CurrenciesComponent },
  { path: 'currency/:id', component: CurrencyDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
