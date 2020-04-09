import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService{
  emailInfo:any;
  constructor(public http: HttpClient) { }
  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 
  sendEmail(details) {
    let headers = new Headers({ 'Content-Type': 'application/json'});

  
 return this.http.post("https://us-central1-bushwickaid.cloudfunctions.net/contactUs", JSON.stringify(details))
}
}