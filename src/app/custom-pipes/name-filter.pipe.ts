import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  pure:false
})
export class NameFilterPipe implements PipeTransform {

  transform(datas:  any[], searchQ: string): any[] {
    //datas = JSON.stringify(datas);
     return datas.filter(data => JSON.stringify(data).toLowerCase().includes(searchQ.toLowerCase()));
  }

}
