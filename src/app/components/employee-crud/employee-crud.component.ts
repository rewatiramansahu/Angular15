import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees:any[] = [
    {empid:10001, name:'Rakesh', salary:24000, designation:'Developer'},
    {empid:10002, name:'Narayana', salary:8000, designation:'Designer'},
    {empid:10003, name:'Shivi', salary:4000, designation:'Tester'},
    {empid:10004, name:'Mohan', salary:9000, designation:'Analyst'},
    {empid:10005, name:'Vikram', salary:35000, designation:'Manager'},
  ]
  isModalOpen = true;
  selectedEmployee:any={};

  empid:any="";
  name:any="";
  salary:any="";
  designation:any="";
  isNew:boolean=true;

  addEmployee()
  {

    this.employees.push({empid:this.empid,name:this.name,salary:this.salary,designation:this.designation});
    Swal.fire('Saved!', 'Employee has been saved.', 'success');
  }


  deleteEmployee(employee: any): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
          this.employees.splice(index, 1);
          Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
        }
      }
    });
  }


  updateEmployee(employee: any): void {
    // Find the index of the employee in the employees array
    const index = this.employees.indexOf(employee);

    if (index !== -1) {
      // Create a copy of the employee object to prevent modifying the original
      const editedEmployee = { ...employee };

      // Perform any modifications to the employee object as needed
      if(this.empid)
      editedEmployee.empid = this.empid;
      if(this.name)
      editedEmployee.name = this.name;
      if(this.salary)
      editedEmployee.salary = this.salary;
      if(this.designation)
      editedEmployee.designation = this.designation;

      // Update the employee object in the employees array
      this.employees[index] = editedEmployee;

      Swal.fire('Updated!', 'Employee has been updated.', 'success');
    }
  }


  openEmployeeModal(employee: any): void {

    this.selectedEmployee = employee;
   // this.isModalOpen = true;
   this.isNew=false;
  }

  forAddButton()
  {
    this.isNew=true;
    this.selectedEmployee={};
  }

  closeModal(): void {
    this.isModalOpen = false;
  }



}
