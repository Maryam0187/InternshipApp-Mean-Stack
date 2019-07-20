import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


declare var M: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]

})
export class StudentComponent implements OnInit {

  constructor(private studentservice:StudentService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    this.studentservice.postStudent(form.value).subscribe((res)=>
    {
      // M.toast({html:"Saved sucessfully",classes:'rounded'});
      this.router.navigateByUrl('/Apply');

    });
  }
  

}
