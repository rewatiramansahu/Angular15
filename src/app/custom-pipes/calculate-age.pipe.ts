import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(birthdate: string): number | null {
    const today = new Date();
    const birth = new Date(birthdate);
    const yearsDiff = today.getFullYear() - birth.getFullYear();
    const isSameMonth = today.getMonth() === birth.getMonth();
    const isSameDay = today.getDate() === birth.getDate();

    // If the birthdate is later in the current year, subtract 1 from the age
    if (!isSameMonth || !isSameDay) {
      return yearsDiff;
    }

    return yearsDiff - 1;
  }

}
