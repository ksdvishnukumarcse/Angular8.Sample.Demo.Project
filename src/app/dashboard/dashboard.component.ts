import { UserService } from './../user.service';
import { Posts } from './../post';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from './../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses: Course[];
  posts : Posts[];

  constructor(private CourseService: CourseService, private UserService:UserService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getPosts();
  }

  getCourses() :void {
    this.CourseService.getCourses().subscribe(courses=> this.courses = courses)
  }

  getPosts() : void {
    this.UserService.getPosts().subscribe(posts => this.posts = posts)
  }

}
