import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit{

  studentsFormInputs: Student = {
  id: 0,
  name:'',
  email: '',
  gender: '',
  age: 0,
  address: '',
  phone: 0

  };

  constructor(private studentService: StudentsService, private router: Router) {

  }

  ngOnInit(): void {
  }

  addStudent(){
   this.studentService.addStudent(this.studentsFormInputs)
   .subscribe({
    next: (student) => {
      this.router.navigate(['students/list'])
    },
    error: (response) => {
      console.log(response)
    }
   });
  }

}
