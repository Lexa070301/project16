import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return items;
    } else {
      searchStr = searchStr.toLowerCase();
      const filteredItems = items.filter((item) => (item.name.toLowerCase().indexOf(searchStr) !== -1) || (item.surname.toLowerCase().indexOf(searchStr) !== -1));
      return filteredItems;
    }
  }
}
