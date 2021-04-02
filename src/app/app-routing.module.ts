import { PostDetailComponent } from './post-detail/post-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'deatil/:id', component: CourseDetailComponent},
  {path:'bookdetail/:id', component: BookDetailComponent},
  {path:'postdetail/:id', component: PostDetailComponent},
  {path:'courses', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
