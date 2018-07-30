import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filters } from '../interfaces/filters';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() filtersEmit: EventEmitter<any> = new EventEmitter<any>();

  public filters: Filters;
  public attributes: string[];

  constructor() {
    this.filters = { text: '', attribute: ''};
    this.attributes = ['id', 'code', 'name', 'type'];
  }

  ngOnInit() {
  }

  public onKeydown(event) {
    if (event.key === 'Enter') {
      this.filtersEmit.emit(this.filters);
    }
  }

  public onChange(event) {
    this.filtersEmit.emit(this.filters);
  }

}
