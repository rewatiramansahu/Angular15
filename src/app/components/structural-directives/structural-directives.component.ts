import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showElement: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  value: string = 'A';

}
