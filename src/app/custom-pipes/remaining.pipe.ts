import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input?:string): number {
    if(!input)
    return 100

    return 100-(input.length);
  }

}
