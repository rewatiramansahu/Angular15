import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCountClick]'
})
export class CountClickDirective {

  constructor() { }
  count:number=0;

  @HostBinding('style.cursor')
  cursor:string='pointer';

  @HostBinding('style.color')
  color111:string='red';

  @HostBinding('class.clicked')
  isClicked:boolean=false;

  @HostBinding('attr.title')
  tabindex: string = "This is count click title.";


  @HostListener('click')
  onClickFun(){
    this.count++
    this.isClicked=true;
    console.log(`Clicked ${this.count} times!`);

  }

}
