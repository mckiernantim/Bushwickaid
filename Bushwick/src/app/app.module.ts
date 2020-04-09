import { MatDatepickerModule } from '@angular/material/datepicker';
import { ResourcesComponent } from './components/resources/resources.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmailService } from './email.service';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog"
import { MatInputModule } from '@angular/material/input'
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AboutComponent } from './components/about/about.component';
import { LegalComponent } from './components/legal/legal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { PostComponent } from './components/post/post.component';
import { JoinComponent } from './components/join/join.component';
import { config } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'

import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './components/dialog/dialog.component';

import { SupportComponent } from './support/support.component';
import { HelpComponent } from './help/help.component';
import { MapComponent } from './components/map/map.component';
import { PostResourceComponent } from './components/post-resource/post-resource.component';
import { FooterComponent } from './components/footer/footer.component'
import { MatNativeDateModule } from '@angular/material/core';
import { TermsComponent } from './components/terms/terms.component';

const firebaseConfig = {
  apiKey: "AIzaSyBX2A_gfZAxdGNlOoTb00scUL7ks8mrr4s",
  authDomain: "bushwickaid.firebaseapp.com",
  databaseURL: "https://bushwickaid.firebaseio.com",
  projectId: "bushwickaid",
  storageBucket: "bushwickaid.appspot.com",
  messagingSenderId: "782371018289",
  appId: "1:782371018289:web:83e0dce63ea6d502886710",
  measurementId: "G-M5M8ZJD8SD"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    ProfileComponent,
    ConfirmComponent,
    AboutComponent,
    LegalComponent,
    NavbarComponent,
    LandingComponent,
    PostComponent,
    JoinComponent,
    DialogComponent,
    ResourcesComponent,
    SupportComponent,
    HelpComponent,
    MapComponent,
    ResourcesComponent,
    PostResourceComponent,
    FooterComponent,
    TermsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
   FlexLayoutModule,




  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule, 
    MatNativeDateModule
  ],
  providers: [EmailService, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
