import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CurrenciesComponent } from './currencies.component';
import { SearchComponent } from '../search/search.component';
import { CurrenciesService } from '../services/currencies.service';
import { PaginationComponent } from '../pagination/pagination.component';

xdescribe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrenciesComponent,
        SearchComponent,
        PaginationComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
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
