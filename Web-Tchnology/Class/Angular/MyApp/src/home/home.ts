import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
//interpolation
export class Home { 
  fname : string = "Siddhi";
  myRoll : Number = 1526;
  course : string = "AIML";
  city : string[]= ["Pune", "Mumbai", "Delhi", "Ichalkaranji"];

  ShowButton(){
    this.fname = "Siddhi Chavan",
    alert("Name updated successfully !!")
  }


}


