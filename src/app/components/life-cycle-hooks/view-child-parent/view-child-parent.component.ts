import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit {
  
  @ViewChild('child1ref') child1ref:any;
  @ViewChild('child1a') child1a:any;

  constructor() { }

  ngOnInit(): void {
  }

  array: number[] = [1, 2, 3];

  updateArray() {
    // Update the array in the parent component
    this.array.push(4);
  }

}
