import { DatePipe } from '@angular/common';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({

  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  inputForm: FormGroup
  currentUser = JSON.parse(localStorage.getItem('user'))
  minDate: any= (new Date()).toISOString()

  constructor(public ps:PostService) { }
   
  ngOnInit() {
 
    this.inputForm = new FormGroup({
      'text': new FormControl('Description', [Validators.required, Validators.minLength(10)]),
      'location': new FormControl('Location', [Validators.required] ),
      'date': new FormControl('When do you need this', [Validators.required]),
      'contact': new FormControl('Contact', [Validators.required, Validators.minLength(9), Validators.maxLength(10)])

    })
    console.log(this.inputForm)
  }
  logPost(){
 
    console.log(new Date(this.inputForm.value.date))

  }
  onSubmit(){
    let newPost =  {
      text: this.inputForm.value.text,
       time: this.inputForm.value.date,
      location: this.inputForm.value.location,
      author: this.currentUser.displayName,
      contact:this.inputForm.value.contact
    }
   console.log(newPost)
   this.ps.createPost(newPost)
    

  }
}
