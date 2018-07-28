import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value, args: any): any {
    const res = [];
    const currentPage = args[0];
    const limit = args[1];
    let indexElt = currentPage - 1;

    if (currentPage < limit) {
      return [1, 2, 3, 4];
    } else {
      if ((value - currentPage) === 1) {
        indexElt = currentPage - 2;
      }

      if ((value - currentPage) === 0) {
        indexElt = currentPage - 3;
      }

      for (let i = indexElt; i <= value; i++) {
        if (res.length <= limit) {
          res.push(i);
        }
        if (res.length === limit) {
          return res;
        }
      }
    }
  }
}
