import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees:any[] = [
    {empid:10001, name:'Rakesh', salary:24000, designation:'Developer'},
    {empid:10002, name:'Narayana', salary:8000, designation:'Designer'},
    {empid:10003, name:'Shivi', salary:4000, designation:'Tester'},
    {empid:10004, name:'Mohan', salary:9000, designation:'Analyst'},
    {empid:10005, name:'Vikram', salary:35000, designation:'Manager'},
  ];

     constructor() { }
      
      getAllEmployees(): any[] {
        return this.employees;
      }

      getEmployeeById(empid: number): any {
        return this.employees.find(emp => emp.empid === empid);
      }

      addEmployee(employee: any): void {
        this.employees.push(employee);
      }

      updateEmployee(employee: any): void {
        console.log(employee);
        const index = this.employees.findIndex(emp => emp.empid === employee.empid);
        if (index !== -1) {
          this.employees[index] = employee;
        }
      }

      deleteEmployee(empid: number): void {
        const index = this.employees.findIndex(emp => emp.empid === empid);
        if (index !== -1) {
          this.employees.splice(index, 1);
        }
      }

}
