import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(totalPage, args: any): any {

    const res = [];
    const currentPage = args[0];
    const limit = args[1];
    let indexElt = currentPage - 1;

    if (totalPage > limit) {
      if (currentPage < limit) {
        return [1, 2, 3, 4];
      } else {
        if ((totalPage - currentPage) === 1) {
          indexElt = currentPage - 2;
        }

        if ((totalPage - currentPage) === 0) {
          indexElt = currentPage - 3;
        }

        for (let i = indexElt; i <= totalPage; i++) {
          if (res.length <= limit) {
            res.push(i);
          }
          if (res.length === limit) {
            return res;
          }
        }
      }
    } else {
      for (let i = 1; i <= totalPage; i++) {
        res.push(i);
      }
      return res;
    }
  }
}
