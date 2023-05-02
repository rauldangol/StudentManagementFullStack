import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student.interface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit{

  studentDetails: Student = {
    id: 0,
    name:'',
    email: '',
    gender: '',
    age: 0,
    address: '',
    phone: 0

    };


  constructor(private route: ActivatedRoute, private studentService: StudentsService, private router: Router) {


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if(idString !== null){
          const id = parseInt(idString);


        if(id){
          this.studentService.getStudent(id).subscribe({
            next: (response) => {
              this.studentDetails = response
            }
          });
        }
      }
    }
    });
  }

  updateStudent(){
    this.studentService.updateStudent(this.studentDetails.id, this.studentDetails).subscribe({
      next: (response) => {
        this.router.navigate(['students/list/']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        this.router.navigate(['students/list/']);
      }
    });
  }

}
