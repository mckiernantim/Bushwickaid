import { MatDatepicker } from '@angular/material/datepicker';
import { ResourceService } from './../../services/resource.service';
import { Resource } from '../../models/resource';




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-resource',
  templateUrl: './post-resource.component.html',
  styleUrls: ['./post-resource.component.css']
})
export class PostResourceComponent implements OnInit {
  inputForm: FormGroup
  currentUser = JSON.parse(localStorage.getItem('user'))
  minDate: any= (new Date()).toISOString()

  constructor(public rs:ResourceService) { }

  ngOnInit() {
    this.minDate;
    console.log("date is " + this.minDate)
    this.inputForm = new FormGroup({
      'text': new FormControl ('', [Validators.required, Validators.minLength(10)]),
      'location' : new FormControl ('', [Validators.required] ),
      'quantity' : new FormControl ('', [Validators.required]),
      'date' : new FormControl ('', [Validators.required]),
      'contact' : new FormControl ('',[ Validators.minLength(9) || Validators.email])
})
  }
  onSubmit(){
    let newResource = Object.assign(this.inputForm.value)
    console.log(newResource);
    this.rs.createResource(newResource)
  }

}
