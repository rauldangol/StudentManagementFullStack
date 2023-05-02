import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentsComponent } from './components/students/add-students/add-students.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditStudentsComponent } from './components/students/edit-students/edit-students.component';


const appRoutes: Routes= [
  {path: '', component: ListStudentsComponent},
  {path: 'students/list', component: ListStudentsComponent},
  {path: 'students/add', component: AddStudentsComponent},
  {path: 'students/edit/:id', component: EditStudentsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    NavBarComponent,
    AddStudentsComponent,
    EditStudentsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
