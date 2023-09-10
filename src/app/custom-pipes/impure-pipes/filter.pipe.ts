import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
     // const itemValue = Object.values(item).join(' ').toLowerCase();
      const  itemValue = JSON.stringify(item).toLowerCase();
      return itemValue.includes(searchText);
    });
  }

}
