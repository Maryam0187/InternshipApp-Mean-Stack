import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[StudentService]

})
export class SigninComponent implements OnInit {

  constructor(private studentservice:StudentService,private router: Router) { }

  rollnumber:String;
  Password:String;


  ngOnInit() {

    this.rollnumber="";
    this.Password="";
  }



  signin(form:NgForm)
  {
    console.log(this.rollnumber,this.Password);
    this.studentservice.getStudent(this.rollnumber).subscribe((res)=>
    {

      console.log(res[0].password);

      if(this.rollnumber && this.Password && this.Password==res[0].password)
      {
        if (this.rollnumber=="Web2019")
        {
          this.router.navigateByUrl('/admin');
        }
        else
        {
          this.router.navigateByUrl('/Apply');
        }
      }

    });

  }  

}
