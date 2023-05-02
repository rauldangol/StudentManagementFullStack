import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Student } from '../interfaces/student.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {

  }

  getAllStudents(): Observable<Student[]>{
   return this.http.get<Student[]>(this.baseApiUrl + '/api/StudentMgmt')
  }

  addStudent(addStudentRequest: Student): Observable<Student>{
  return this.http.post<Student>(this.baseApiUrl + '/api/StudentMgmt', addStudentRequest)
  }

  getStudent(id: number): Observable<Student>{
    return this.http.get<Student>(this.baseApiUrl + '/api/StudentMgmt/' + id)
  }

  updateStudent(id: number, updateStudentRequest: Student): Observable<Student>{
    return this.http.put<Student>(this.baseApiUrl + '/api/StudentMgmt/' + id, updateStudentRequest)
  }

  deleteStudent(id: number): Observable<Student>{
    return this.http.delete<Student>(this.baseApiUrl + '/api/StudentMgmt/' + id)
  }
}
