import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-directives',
  templateUrl: './event-directives.component.html',
  styleUrls: ['./event-directives.component.css']
})
export class EventDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Handle form submission
    alert("form submitted .");
  }

  handleClick() {
    // Handle button click
    alert("test")
  }

  handleChange(event: any) {
    // Handle input change
    alert("test")
  }

  handleKeyDown(event: any) {
    // Handle keydown event
    alert("test")
  }

  handleKeyUp(event: any) {
    // Handle keyup event
    alert("test")
  }

  handleKeyPress(event: any) {
    // Handle keypress event
    alert("test")
  }

}
