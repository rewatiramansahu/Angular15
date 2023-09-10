import { Directive , HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[numberonly]'
})
export class NumberOnlyDirective {

  constructor() { }
  @HostBinding('style.background-color') myBgColor: string = 'yellow';  
  @HostListener('keyup', ['$event'])
  handleKeyUp(e: { target: { value: string } }) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(e.target.value)) {
      this.myBgColor = 'red';
      alert("Only numbers allowed here...");
      e.target.value='';
    } else {
      this.myBgColor = 'green';
    }
  }


}
