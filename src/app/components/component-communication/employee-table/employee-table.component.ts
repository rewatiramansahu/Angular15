import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  inputs:['employees']
})
export class EmployeeTableComponent implements OnInit {

  @Output() editEmployeeEvent = new EventEmitter<{empid:number, name:string, salary:number, designation:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  employees:any[]=[];
  selectedEmployee:any={};
  selectedEmployeeEdit:any={};
  isNew:boolean=true;
  searchQ:string="";
   sortColumn: string="";
   sortDirection: string="";

  

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




  openEmployeeModal(employee: any): void {

    this.selectedEmployee = employee; 
       
  }

  editEmployee(employee: any): void {

    this.editEmployeeEvent.emit(employee);
    console.log(employee);
  }





  // for sort by column 

  sortTable(columnName: string) {
    if (this.sortColumn === columnName) {
      // If the same column is clicked, toggle the sort direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // If a new column is clicked, set it as the sorting column with the default sort direction
      this.sortColumn = columnName;
      this.sortDirection = 'asc';
    }
  
    // Sort the employees array based on the chosen column and direction
    this.employees.sort((a, b) => {
      // Compare the values of the selected column
      const valueA = a[columnName];
      const valueB = b[columnName];
  
      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  




}
