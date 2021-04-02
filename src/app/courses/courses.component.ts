import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import {Course} from '../course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course
  
  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  getCourses() :void {
    this.CourseService.getCourses().subscribe(courses=> this.courses = courses)
  }

  GetUpdatedValueFromChild(updatedvalue: string) :void{
    alert(updatedvalue);
  }

}
