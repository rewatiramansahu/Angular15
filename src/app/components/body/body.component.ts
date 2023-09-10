import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class BodyComponent implements OnInit {
  constructor() {}
  users:any[]=[
    {first_name : "Rakesh", last_name:"Sahu", email:"rakeshsahu@gmail.com"},
    {first_name : "Mohan", last_name:"Yadav", email:"mohanyadav@gmail.com"},
    {first_name : "Satish", last_name:"Jain", email:"satishjain@gmail.com"},
  ];

  ngOnInit(): void {}
}
