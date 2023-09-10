import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // ChangeDetectorRef  two method : markForCheck() or detectChanges()
})
export class ViewChild1Component implements OnInit {
  @Input('arrayData')  arrayData:any;
  cdr : any ;

  a:number=10;

  constructor(private cdr1: ChangeDetectorRef) {
    this.cdr = cdr1 ;
   }

  ngOnInit(): void {
  }
  f1()
  {
    this.cdr.markForCheck();
    
  }

 


}
