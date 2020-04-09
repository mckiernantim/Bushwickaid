import { ResourceService } from './../../services/resource.service';
import { map } from 'rxjs/operators';
import { EmailService } from './../../email.service';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import {MatPaginator} from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, AfterViewInit {
  feedState: number = 0
  posts: Post[]
  openPosts: Post[]
  currentPost: Post
  resourcesCount: number;
  postsCount: number ;
  userCount:number;
  displayedColumns: string[] = ["Task", "Location", "Time", "Claim"]
  dataSource: MatTableDataSource<Post> = new MatTableDataSource
  constructor(public ps: PostService, public dialog: MatDialog, public email:EmailService, public rs:ResourceService) {}
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {


    this.ps.getPosts().subscribe(data => {
    let date = new DatePipe('en-US')
      this.openPosts = []
      
      this.posts = data;
      this.postsCount = data.length;
      console.log(this.posts)
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].claimedBy === "" && (this.posts[i].time.seconds * 1000) > Date.now()|| this.posts[i].claimedBy === null  && (this.posts[i].time.seconds * 1000) > Date.now() ) {
                 
          this.openPosts.push(this.posts[i])
        }
      }this.dataSource.data = this.openPosts
      this.dataSource.paginator = this.paginator
    })
    this.rs.getResources().subscribe( data => {
      this.resourcesCount = data.length
    })
    this.ps.getUsers().subscribe(users => {
      this.userCount = users.length
    })
  }
  ngAfterViewInit(): void {   
    console.log("AFTER VIEW FIRING")
  
  

    console.log(this.dataSource)
  }


  canHelp() {
    console.log("can help")
    this.feedState = 1
    document.getElementById('paginator').style.opacity="1"
    this.dataSource.paginator = this.paginator;
  
  }
  needHelp() {
    this.feedState = 2
  }
  goBack() {
    this.feedState = 0;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  claimClicked(id) {
    console.log(id)
    this.ps.updatePost(id, 2)
  }
  
  resources() {
    this.feedState = 3
  }
  populate(){
    this.ps.populatePosts()
  }
  openDialog(id): void {
    console.log(id)
    this.ps.getPost(id).subscribe(post => {
      this.currentPost = post;
      this.currentPost.id = id
      console.log("open dialog being called");

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '50%',
        data: {
          text: this.currentPost.text,
          location: this.currentPost.location,
          time: this.currentPost.time,
          id: this.currentPost.id,
          author: this.currentPost.author,
          uid: this.currentPost.uid

        }
      });
    })
  }
  

}

