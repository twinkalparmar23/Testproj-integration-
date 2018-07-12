import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
//import { EmployeeService} from '../service/employee.service';
import {IEmployee, Employee} from '../service/employee.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  qualifications: string[];
  experience: string[];
  id:number;
  
  model=new Employee();
  
    constructor(private _httpService: Http, private route:ActivatedRoute,private router:Router) { 
    this.id=this.route.snapshot.params['id'];
  }
  
  ngOnInit() {

      this.qualifications = ['BE', 'B.Tech', 'M.Tech', 'BCA', 'MCA'];
      this.experience = ['1', '2', '3', '4', '5'];

      this._httpService.get('/api/values' + '/' + this.id).subscribe(values => {
          this.model = values.json() as Employee;
      });

  }


    onSubmit(form: any) {
        this._httpService.put('/api/values' + '/' + this.id,this.model).subscribe();
        this.router.navigate(['/employee-list']);
  }
    
  btnCancel(event :Event){
    //form.reset();
    event.preventDefault();
    this.router.navigate(['/employee-list']);
  }

}
