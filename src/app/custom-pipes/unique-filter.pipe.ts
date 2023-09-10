import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFilter'
})
export class UniqueFilterPipe implements PipeTransform {

  transform(arr: any[]): any[] {    
    return [...new Set(arr)];
  }

}
