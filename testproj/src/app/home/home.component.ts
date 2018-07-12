import { Component, OnInit } from '@angular/core';
//port { EmployeeService } from '../service/employee.service'
import { ActivatedRoute,Router } from '@angular/router';
import {IEmployee, Employee} from '../service/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //public empData: Employee[];
  ngOnInit() {
    //this._employeeService.get().subscribe((data: any) => this.empData = data);
  }

}
