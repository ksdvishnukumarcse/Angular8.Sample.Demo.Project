import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../post';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Posts;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserService) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.getPostById(Number(id)).subscribe(p => this.post = p);
  }

  goToList() {    
    this.router.navigate(['/dashboard']);
  }

}
