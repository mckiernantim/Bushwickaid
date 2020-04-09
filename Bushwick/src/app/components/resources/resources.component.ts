import { EmailService } from './../../email.service';
import { ResourceService } from './../../services/resource.service';

import { Resource } from '../../models/resource'
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  feedState: number = 0;
  resources: Resource[];
  resourceCount:number;
  openResources: Resource[];
  currentResource: Resource;
  displayedColumns: string[] = ["Resource", "Time", "Location", "Quantity", "Available?", "Request"]
  dataSource: MatTableDataSource<Resource> = new MatTableDataSource
  constructor(public router: Router, public rs: ResourceService, public dialog: MatDialog, public email: EmailService) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this.rs.getResources().subscribe(data => {
      this.openResources = []
      this.resources = data;
      this.resourceCount = data.length;
      console.log(this.resources)
      for (let i = 0; i < this.resources.length; i++) {
        if (this.resources[i].claimedBy === "" || this.resources[i].claimedBy === null) {
          let formattedTime = new Date(this.resources[i].time)
          this.resources[i].time = formattedTime
          this.openResources.push(this.resources[i])
        }
      }
      this.dataSource.data = this.openResources
      this.dataSource.paginator = this.paginator
    })

  }
  needResources(){
    this.feedState = 1;
    document.getElementById('paginator').style.opacity="1"
    this.dataSource.paginator = this.paginator;
  }
  haveResources(){
    this.feedState = 2

   
  }
  startOver(){
    this.feedState = 0;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  populate(){
    this.rs.populateResources()
  }
  openDialog(id): void {
    console.log(id)
    this.rs.getResource(id).subscribe(resource => {
      this.currentResource = resource;
      this.currentResource.id = id
      console.log("open dialog being called");

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '50%',
        data: {
          text: this.currentResource.text,
          location: this.currentResource.location,
          time: this.currentResource.time,
          id: this.currentResource.id,
          author: this.currentResource.author,
          uid: this.currentResource.uid
         

        }
      });
    })
  }
}