import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: any[], property: string): any {
    if (!Array.isArray(value) || !property) {
      return value;
    }

    const grouped: { [key: string]: any[] } = {};
    for (const item of value) {
      const groupValue = item[property];
      if (!grouped[groupValue]) {
        grouped[groupValue] = [];
      }
      grouped[groupValue].push(item);
    }

    return Object.keys(grouped).map((key) => ({ [property]: key, items: grouped[key] }));
  }

}
