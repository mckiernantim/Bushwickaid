import { ResourceService } from './../../services/resource.service';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Resource} from '../../models/resource'
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userPosts: Post[]
  userResource:Resource[]
  userCreatedPosts:Post[]
  displayedColumns: string[] = ["Task", "Location", "Time", "Contact", "Cancel"]
  resourceTableColumns: string[] =["Resource", "Location", "Available Time", "Contact", "Quantity", "Delete"]
  dataSource: MatTableDataSource<Post>
  publishedPosts: MatTableDataSource<Post>
  userResources: MatTableDataSource<Resource>
  currentUser = JSON.parse(localStorage.getItem('user'))
  currentTime = new Date()
  constructor(public ps:PostService, public rs:ResourceService) { }

  ngOnInit() {
    // get users posts they've agreed to help with
    this.ps.getUserPosts().subscribe(data => {
   console.log(data)
      data.forEach(post =>{
        console.log("firing")
        // parse date to human format
     
        console.log(post.time)
      })
      
      console.log(data)
      this.dataSource = new MatTableDataSource(data)
    })
    // get users posts they have published
    this.ps.getUserPublishedPosts().subscribe(data =>{
      console.log(data)
      data.forEach(post =>{

       post.time = post.time.toDate()
   
       
      })
      this.publishedPosts = new MatTableDataSource(data)
    })
    // get user's resources they have on the open feed
    this.rs.getUserPublishedResources().subscribe(data => {
      console.log(data) 

      data.forEach(post =>{
        //  parse date
           post.date = post.date.toDate()
          
        })
        this.userResources = new MatTableDataSource(data)
        console.log(this.userResources)
    })
  }
  deleteClicked(id){
    this.ps.deletePost(id)
  }
  cancelClicked(id){
    console.log(id)
    this.ps.updatePost(id, 1)
    
  }
}
