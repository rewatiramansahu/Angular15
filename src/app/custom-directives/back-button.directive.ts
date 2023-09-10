import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';


@Directive({
  selector: '[appBackButton]'
})
export class BackButtonDirective {

  constructor(private location:Location) { }
  @HostListener('click')
  backFun(){
    console.log(this);
  this.location.back();
  }

}
