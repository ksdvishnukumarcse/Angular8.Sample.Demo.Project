import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  course: Course;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CourseService) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.getCoursesById(Number(id)).subscribe(c => this.course = c);
  }

  goToList() {    
    this.router.navigate(['/dashboard']);
  }

}
