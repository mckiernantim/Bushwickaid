import { EmailService } from './../../email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  emailInfo:any;
  constructor() { }

  ngOnInit( ) {
  
  }

}
