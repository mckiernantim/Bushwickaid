import { ResourceService } from './../services/resource.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  feedState:number=0;
  constructor(public router:Router, public rs:ResourceService) { }

  ngOnInit() {
  }

  
}
