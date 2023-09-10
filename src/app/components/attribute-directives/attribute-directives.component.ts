import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isActive: boolean = true;
  isHighlighted: boolean = false;
  textColor: string = 'red';
  fontSize: number = 20;
  name: string = '';
  isDisabled: boolean = true;
  isReadOnly: boolean = true;
  selectedOption: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];


}
