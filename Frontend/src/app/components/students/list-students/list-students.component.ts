import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents()
    .subscribe({
      next: (students) => {
        this.students = students;
      },
      error: (response) => {
        console.log(response)
      }
    });
  }
}
