import { MessagesService } from './messages.service';
import { COURSES } from './mock-courses';
import { Course } from './course';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

    getCourses(): Observable<Course[]>
    {
      this.messagesService.add("Course Service : fetched courses")
      return of(COURSES);
    }

    getCoursesById(id:number): Observable<Course>
    {
      this.messagesService.add("Course Service : fetched course By Id")
      return id <= 0 ? of(COURSES[id]) : of(COURSES[id-1]);
    }
  constructor(private messagesService:MessagesService) { }
}