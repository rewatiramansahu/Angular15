import { Component, OnInit } from '@angular/core';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css']
})
export class DirectivesPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num=11;

  cities:City[]=[
    {id:1, name:'Raipur'},
    {id:2, name:'Ahmedabad'},
    {id:3, name:'Chennai'},
    {id:4, name:'Pune'},
    {id:5, name:'Banglore'},
    {id:6, name:'Kolkata'},
  ]
  // selectedCity:City={};
  //selectedCity: City = { id: 0, name: '' };


  selectedCity: City | null = null;

  




}
