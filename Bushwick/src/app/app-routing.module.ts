import { TermsComponent } from './components/terms/terms.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { MapComponent } from './components/map/map.component';
import { HelpComponent } from './help/help.component';
import { GuardGuard } from './guards/guard.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'join', component: JoinComponent},
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent,
canActivate: [GuardGuard]},
{ path: 'map', component: MapComponent,
canActivate: [GuardGuard]},
  { path: 'profile', component: ProfileComponent,
  canActivate: [GuardGuard] },
  { path: 'resources', component: ResourcesComponent,
  canActivate: [GuardGuard] },
  {path: 'help', component: HelpComponent},
  {path: 'terms', component: TermsComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
