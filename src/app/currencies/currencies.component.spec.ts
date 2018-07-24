import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesComponent } from './currencies.component';
import { CurrenciesService } from '../services/currencies.service';
import { HttpClientModule } from '@angular/common/http';

describe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        CurrenciesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
