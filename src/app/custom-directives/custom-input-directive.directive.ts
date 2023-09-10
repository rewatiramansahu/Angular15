import { Directive,ElementRef,HostBinding,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[mydirective]'
})
export class CustomInputDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.color')
  c:string='blue'

  @HostBinding('style.backgroundColor')
  bg:string='black'

  @HostBinding('attr.title')
  t:string="This is a my title."

  @HostBinding('class.btn')
  @HostBinding('class.btn-info')
  

  @HostListener('mouseenter')
  fun1() {   
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.scale = '1.2';
      this.el.nativeElement.style.padding='10px';
  }

  @HostListener('mouseleave')
  fun2() {   
      this.el.nativeElement.style.backgroundColor = '';
      this.el.nativeElement.style.scale = '1.0';
  }

  @HostListener('click')
  fun3()
  {
    this.el.nativeElement.style.color="yellow";
  }


  @HostListener('keyup')
  myKeyUp()
  {
    this.el.nativeElement.style.color="darkred"
  }
 

}
