import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const shuffled = [...value];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      console.log(j,i);
      console.log(shuffled[j], shuffled[i]);
      console.log("-------------------");
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

}
