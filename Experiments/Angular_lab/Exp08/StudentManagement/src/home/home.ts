import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //interpolation
  student = {
    name :'Siddhi',
    age : 20,
    course : 'AIML'
  };

  newStudent = {
    name : '',
    age : '',
    course : ''
  };

  updateStudent(){
    this.student.name = this.newStudent.name;
    this.student.age = Number(this.newStudent.age);
    this.student.course = this.newStudent.course;
  }
  
  src = 'https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png';
  
  isImage : boolean = true;
  
  //array of courses
  courses : string[] = ["CSE", "AIML", "AIDS", "ENTC"];
}
