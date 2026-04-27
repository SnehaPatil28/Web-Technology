import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name: 'Siddhi', age : 20, course : "AIML"},
    {name:'Ankita', age : 20, course : "AIML"}
  ]

  getStudents(){
    return this.students;
  }
}
