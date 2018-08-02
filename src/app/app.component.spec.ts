import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { APP_BASE_HREF } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrenciesComponent,
        CurrencyDetailComponent,
        PaginationComponent,
        PaginationPipe,
        SearchComponent,
        PageNotFoundComponent
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
        ConfigService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
