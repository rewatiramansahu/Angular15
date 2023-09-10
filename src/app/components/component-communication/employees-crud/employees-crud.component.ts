import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-crud',
  templateUrl: './employees-crud.component.html',
  styleUrls: ['./employees-crud.component.css']
})
export class EmployeesCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees:any[] = [
    {empid:10001, name:'Rakesh', salary:24000, designation:'Developer'},
    {empid:10002, name:'Narayana', salary:8000, designation:'Designer'},
    {empid:10003, name:'Shivi', salary:4000, designation:'Tester'},
    {empid:10004, name:'Mohan', salary:9000, designation:'Analyst'},
    {empid:10005, name:'Vikram', salary:35000, designation:'Manager'},
  ];

  selectedEmployee:any={};
  isNew:boolean=true;



  addedEmployee(employeeData: any)
  {
     this.employees.push({
      empid: employeeData.empid,
      name: employeeData.name,
      salary : employeeData.salary,
      designation: employeeData.designation
    })
    Swal.fire('Saved!', 'Employee has been saved.', 'success');
  }

  updatedEmployee(employee: any)
  {
     // Find the index of the employee in the employees array
     const index = this.employees.indexOf(this.selectedEmployee);
     console.log(index);

     if (index !== -1) {
       // Create a copy of the employee object to prevent modifying the original
       const editedEmployee = { ...employee };

       if(employee.empid)
       editedEmployee.empid = employee.empid;
       if(employee.name)
       editedEmployee.name = employee.name;
       if(employee.salary)
       editedEmployee.salary = employee.salary;
       if(employee.designation)
       editedEmployee.designation = employee.designation;

       // Update the employee object in the employees array
       this.employees[index] = editedEmployee;

       Swal.fire('Updated!', 'Employee has been updated.', 'success');
     }

  }

  OnEditEmployee(employeeData: any)
  {
    console.log(this.isNew);
    this.selectedEmployee= employeeData;
    this.isNew=false;
    console.log(this.isNew);
  }

  isNewChanged(flag:boolean)
  {
    this.isNew=flag;
  }

}
