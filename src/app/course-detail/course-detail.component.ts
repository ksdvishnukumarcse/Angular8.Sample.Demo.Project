import { Course } from './../course';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course  
  @Output() updatedCourse = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {    
  }

  updateValue(value: string) {
    this.updatedCourse.emit(value);
  }
}
