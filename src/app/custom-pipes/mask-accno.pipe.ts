import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskAccno'
})
export class MaskAccnoPipe implements PipeTransform {

  transform(accno: string): string {
    const firsttwo = accno.substring(0,2);
   const  lasttwo = accno.substring(accno.length-2);
   const  middle = accno.substring(2,accno.length-2)
   const mask = "*".repeat(middle.length);

    const finalacc = firsttwo + mask +lasttwo;
    return finalacc;
  }

}
