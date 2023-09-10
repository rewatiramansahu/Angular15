import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:string="Sachin tendulkar"
salary:number=5000;
today:Date=new Date();
user = {
         id:1001,
         name:"Rakesh",
         email:"rakesh@gmail.com",
         phone:"Raipur"
       };

   arr1 = [10,20,30,40,50,60,70];    
}
