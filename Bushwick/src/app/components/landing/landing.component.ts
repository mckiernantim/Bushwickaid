import { PostService } from './../../services/post.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  postCount: number;
  userCount: number

  constructor( private auth:AuthService, public ps:PostService) { }

  ngOnInit() {
    this.ps.getUsers().subscribe(data => {
      this.userCount = data.length
    })
    this.ps.getPosts().subscribe(posts => {
      this.postCount = posts.length
    })
    this.ps.getUsers
    
  }
  signUpGoogle(){
    this.auth.GoogleAuth()

  }
  signUpFacebook(){
    this.auth.FacebookAuth()
  }

}
