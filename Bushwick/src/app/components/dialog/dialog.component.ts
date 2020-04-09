import { EmailService } from './../../email.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('user'))
  @Input() text:string;
  @Input() time:string;
  @Input() location:string

  constructor( public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, public ps:PostService, public email:EmailService) { }
  
  ngOnInit() {
    console.log(this.data)
  }
 
  
  onNoClick(id): void {
  
 
    console.log("onNoClick firing")
    this.ps.updatePost(id, 2)
    console.log(this.data),
    this.data.claimedBy =  this.currentUser.email
    this.email.sendEmail(this.data).subscribe(
      data => {
        alert('claim confirmed - confirmation email sent.  Contact ' + this.data.name + " at " + this.data.contact);
        console.log(data)
        this.dialogRef.close()
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )

  }
}
 


 


