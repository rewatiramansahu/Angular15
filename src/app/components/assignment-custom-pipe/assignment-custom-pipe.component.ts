import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-custom-pipe',
  templateUrl: './assignment-custom-pipe.component.html',
  styleUrls: ['./assignment-custom-pipe.component.css']
})
export class AssignmentCustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number:number=1;
  employees = [
    { id: 1, name: 'Rakesh Gupta', gender:'male' },
    { id: 2, name: 'Kalpana Jain ', gender:'female' },
    { id: 2, name: 'Ritik Jain ', gender:'male' },
    { id: 2, name: 'Dipali Kashwani ', gender:'female' },
    { id: 2, name: 'Sunita Sharma', gender:'female' },
    // Add more employee objects as needed
  ];

  searchQuery: string = '';
  accno:string= '12345678912';
  accno1:string="";

  getAcc()
  {
    console.log(this.accno1);
  }

}
