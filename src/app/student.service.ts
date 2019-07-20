import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observer';
// import { map } from 'rxjs/operators';
// import {toPromise} from 'rxjs/operator';

import { Student } from "./student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent:Student={
    _id:'',
    name:'',
    password:'',
    rollnumber:'',
    email:''

  };
   baseURL='http://localhost:3000/student/'

  students:Student[];

  constructor(private http:HttpClient) { 
  
  }

  postStudent(stu:Student)
  {
    if (!stu._id)
    {
      return this.http.post(this.baseURL,stu);

    }
    else
    {
    return this.http.post(this.baseURL,stu);
    }
  }

  getStudent(roll:String)
  {
    return this.http.get(this.baseURL+roll);
  }

    getStudentList() {
    return this.http.get(this.baseURL);
  }

  putStudent(stu:Student)
  {
    return this.http.put(this.baseURL+ stu._id, stu);
  }
  deleteStudent(_id:string)
  {
    return this.http.delete(this.baseURL+ _id);
  }

}
