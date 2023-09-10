import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-employee',
  templateUrl: './service-employee.component.html',
  styleUrls: ['./service-employee.component.css']
})
export class ServiceEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

 

  employees:any[]=[];
  isModalOpen = true;
  selectedEmployee:any={};

  empid:any="";
  name:any="";
  salary:any="";
  designation:any="";
  isNew:boolean=true;

  ngOnInit(): void {
    this.employees=this.employeeService.getAllEmployees();
  }
 

  addEmployee()
  {

    this.employeeService.addEmployee({empid:this.empid,name:this.name,salary:this.salary,designation:this.designation});
    Swal.fire('Saved!', 'Employee has been saved.', 'success');
  }

  getEmployeeById(eid:number)
  {
    this.selectedEmployee =  this.employeeService.getEmployeeById(eid);
    this.isNew=false;
  }

  deleteEmployee(eid: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(eid);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      }
    });
  }


  updateEmployee(employee: any): void {
    
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
      this.employeeService.updateEmployee(editedEmployee);

      Swal.fire('Updated!', 'Employee has been updated.', 'success');
    
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
