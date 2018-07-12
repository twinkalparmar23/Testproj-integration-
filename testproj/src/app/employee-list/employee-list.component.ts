import { Component, OnInit,Input } from '@angular/core';
//import { EmployeeService } from '../service/employee.service'
import { ActivatedRoute,Router } from '@angular/router';
import { IEmployee, Employee } from '../service/employee.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public empData: Employee[];
  
    constructor(private _httpService: Http,private route :Router) { }

 // @Input() empData: Employee[];
  ngOnInit() {

      this._httpService.get('/api/values').subscribe(values => {
          this.empData = values.json() as Employee[];
      });

  }

   

  editEmployee(id){
    this.route.navigate(['employee-edit/'+id]);
  }

  deleteEmployee(id){
    var a =confirm("do you want to remove empoyee data  ??");
      if (a) {
          this._httpService.delete('/api/values'+'/'+id).subscribe();
    }
    this.route.navigate(['/employee-list']);
 
  }

}
