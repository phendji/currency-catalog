import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pagination } from '../interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination;
  @Output() pageOrRecordsChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  public onChangeRecordsPerPage(event) {
    const defaultCurrentPage = 1;
    this.pagination.recordsPerPage = event.target.value;
    this.pagination.currentPage = defaultCurrentPage;
    this.pageOrRecordsChange.emit(JSON.parse(JSON.stringify(this.pagination)));
  }

  public setCurrentPage(page: number) {
    this.pagination.currentPage = page;
    this.pageOrRecordsChange.emit(JSON.parse(JSON.stringify(this.pagination)));
  }

  public isActivated(ele: string): boolean {
    if ( (this.pagination[ele] !== null) && (this.pagination[ele] !== this.pagination.currentPage) ) {
      return false;
    } else {
      return true;
    }
  }

}
