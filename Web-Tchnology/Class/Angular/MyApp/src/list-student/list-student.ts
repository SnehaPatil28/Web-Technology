import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})
export class ListStudent {
  students : any[] = []; //any[] -. means it can store any type of array 

  /**
   *
   */
  constructor(private studentservice:StudentService) {}

  //lifecycle hook :-  ng OnInit() : this methods runs automatically when components load
  ngOnInit(){
    this.students = this.studentservice.getStudents();
    console.log(this.students);
  }
}


