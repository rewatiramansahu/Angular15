import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  inputs:['employees', 'selectedEmployee','isNew']
})
export class EmployeeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:any[]=[];
  selectedEmployee:any={};
  @Output() addEmployeeEvent = new EventEmitter<{empid:number, name:string, salary:number, designation:string}>();
  @Output() updateEmployeeEvent = new EventEmitter<{empid:number, name:string, salary:number, designation:string}>();
  @Output() isNewEvent = new EventEmitter();

  empid:any="";
  name:any="";
  salary:any="";
  designation:any="";
  isNew:boolean=true;


  forAddButton()
  {
    console.log(this.isNew);
    this.isNew=true;
    this.selectedEmployee={};
    this.isNewEvent.emit(this.isNew)
    console.log(this.isNew);
  }

  addEmployee()
  {
    this.addEmployeeEvent.emit(
      {empid:this.empid,name:this.name,salary:this.salary,designation:this.designation}
    );
    // this.employees.push({empid:this.empid,name:this.name,salary:this.salary,designation:this.designation});
    // Swal.fire('Saved!', 'Employee has been saved.', 'success');
  }




  updateEmployee(): void {
    this.updateEmployeeEvent.emit(
      {empid:this.empid,name:this.name,salary:this.salary,designation:this.designation}
    );  

  }


}
