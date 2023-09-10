import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-view-child2',
  templateUrl: './view-child2.component.html',
  styleUrls: ['./view-child2.component.css']
})
export class ViewChild2Component implements OnInit, AfterViewInit {
  @ViewChild('headerElement') headerElement!: ElementRef;

  @ViewChildren('childElement', { read: ElementRef }) childElements!: QueryList<ElementRef>;






  constructor() { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    console.log(this.headerElement.nativeElement.textContent);  
    this.headerElement.nativeElement.style.color="gray";
    // Perform actions on the headerElement

    this.childElements.forEach(element => {
      // Access and manipulate each child element
      element.nativeElement.style.color = 'red';
    });
  }

}
