import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('user'))
  mobile:boolean;
  links:string[] = ["profile", "feed", "info" ,"support"] 
  constructor(public as:AuthService, public BreakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.BreakpointObserver.observe([
      '(min-width: 400px)'
    ])
    .subscribe((state:BreakpointState) =>{
      if(state.matches){
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    })
    if(window.screen.width < 480){
      this.mobile= true;
    }
    console.log(this.currentUser)
  }

  onLogoutClicked(){
  this.as.SignOut()
  }
  
}
