import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impure-pipes-practices',
  templateUrl: './impure-pipes-practices.component.html',
  styleUrls: ['./impure-pipes-practices.component.css']
})
export class ImpurePipesPracticesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = '';
  cat: string = '';
  searchText: string = '';
  items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Tomato', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' }
  ];

  numbers = [10,66,22,88,99,34,67,90];

  addNew()
  {
    this.items.push({ name: this.name, category: this.cat })
  }

  pushArr(value: string)
  {
    
    const parsedValue = +value;
      this.numbers.push(parsedValue);
      console.log(parsedValue, this.numbers);
  

  }

}
