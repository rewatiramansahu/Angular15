import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  

  private readonly units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  private readonly teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  private readonly tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  private readonly scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion'];

  transform(value: number): string {
    if (value === 0) {
      return 'zero';
    }

    if (!value) {
      return '';
    }

    let words: string[] = [];

    if (value < 0) {
      words.push('negative');
      value = Math.abs(value);
    }

    let scaleIndex = 0;
    while (value > 0) {
      const threeDigits = value % 1000;
      if (threeDigits !== 0) {
        const chunkWords = this.convertChunk(threeDigits);
        if (chunkWords.length > 0) {
          words = [...chunkWords, this.scales[scaleIndex], ...words];
        }
      }
      value = Math.floor(value / 1000);
      scaleIndex++;
    }

    return words.join(' ');
  }

  private convertChunk(value: number): string[] {
    const words: string[] = [];

    const hundreds = Math.floor(value / 100);
    const tensUnits = value % 100;

    if (hundreds !== 0) {
      words.push(this.units[hundreds]);
      words.push('hundred');
    }

    if (tensUnits !== 0) {
      if (tensUnits < 10) {
        words.push(this.units[tensUnits]);
      } else if (tensUnits < 20) {
        words.push(this.teens[tensUnits % 10]);
      } else {
        const tens = Math.floor(tensUnits / 10);
        const units = tensUnits % 10;

        words.push(this.tens[tens]);
        if (units !== 0) {
          words.push(this.units[units]);
        }
      }
    }

    return words;
  }

}
