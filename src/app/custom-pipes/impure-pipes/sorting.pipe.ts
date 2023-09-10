import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(value: any[]): any[] {
       return value.sort((a, b) => a - b);

     }

}
