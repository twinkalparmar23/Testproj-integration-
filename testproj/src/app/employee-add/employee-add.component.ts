import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
//import { EmployeeService} from '../service/employee.service';
import { IEmployee, Employee } from '../service/employee.model';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

    constructor(private _httpService: Http, private route:ActivatedRoute,private router:Router) { }

  qualifications: string[];
  experience: string[];
  model=new Employee();
  //@Input() empData: Employee[];


  ngOnInit() {
    this.qualifications = ['BE', 'B.Tech', 'M.Tech', 'BCA', 'MCA'];
    this.experience = ['1', '2', '3', '4', '5'];
  }

  onSubmit(form:any){
     
      //console.log(this.model);
      this.add(this.model).then((result) => {
          this.router.navigate(['/employee-list']);
      });
      
  }

   add(emp: Employee) {
        return this._httpService.post('/api/values', emp)
            .pipe(map(res => res.json()))
            .toPromise();
   }

}
