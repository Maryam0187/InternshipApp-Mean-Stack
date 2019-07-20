import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import { NgForm } from '@angular/forms';

import {Student} from '../student.model';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers:[StudentService]

})
export class AdminloginComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshStudentList();
  }

  resetForm(form?: NgForm)
  {
    if(form)
    {
      form.reset();
    }
    this.studentservice.selectedStudent={
      _id:'',
      name:'',
      password:'',
      rollnumber:'',
      email:''
    }
  }

  onSubmit(form: NgForm)
  {
    if (form.value._id=="")
    {
      this.studentservice.postStudent(form.value).subscribe((res)=>
      {
        this.resetForm(form);
        this.refreshStudentList();
      });

    }
    else
    {
      console.log(form.value);
      this.studentservice.postStudent(form.value).subscribe((res)=>
      {
        console.log(form.value);
        console.log(res);
        this.resetForm(form);
        this.refreshStudentList();
      });
    }
    
  }

  refreshStudentList()
  {
    this.studentservice.getStudentList().subscribe((res)=>
    {
      this.studentservice.students=res as Student[];
    });
  }

  onEdit(stu:Student)
  {
    this.studentservice.selectedStudent=stu;
  }

  onDelete(_id:string,form:NgForm)
  {
    if(confirm('Are you sure to delete this record?')==true)
    {
      this.studentservice.deleteStudent(_id).subscribe((res)=>
      {
        this.refreshStudentList();
        this.resetForm(form);
      });
    }
  }

}