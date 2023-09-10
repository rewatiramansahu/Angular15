import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, keywords: string[]): string {
    if (!value || !keywords || keywords.length === 0) {
      return value;
    }

    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return value.replace(regex, '<span class="highlighted">$1</span>');
  }

}
