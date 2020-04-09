import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Resource } from '../models/resource';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import {documentToDomainObject} from '../models/documentToDomainObject'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  resourceCollection: AngularFirestoreCollection<Resource>
  resources:Observable<any>;
  currentUser = JSON.parse(localStorage.getItem('user'))
  private resourceDoc: AngularFirestoreDocument<Resource>

  constructor(private router:Router,  private afs:AngularFirestore) { 
    this.resourceCollection = afs.collection<Resource>("Resources");
    this.resources = 
    this.afs.collection("Resources"). snapshotChanges()
    .pipe(map(actions => actions.map(this.documentToDomainObject)));
  }
  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
}
createResource(resource){
  alert("Resource created: " + resource)
  resource.uid = this.currentUser['uid']
  resource.claimedBy=""
   this.resourceCollection.add(resource)
   .then((resource)=>
    this.router.navigate(['/profile'])).then(
 
  )
}
deleteResource(id){
  this.afs.doc<Resource>('Resources/'+id).delete()
 }
 getResources(){
  return  this.afs.collection('Resources').snapshotChanges()
  .pipe(map(actions => actions.map(this.documentToDomainObject)));
 }
 getResource(id){
  return this.afs.doc<Resource>('Resources/'+id).valueChanges()
  
}
getUserResources(){
  
  return this.afs.collection('Resources', ref => ref.where('claimedBy', '==', `${this.currentUser.uid}`)).snapshotChanges()
  .pipe(map(actions => actions.map(this.documentToDomainObject)));
}
getUserPublishedResources(){
  return this.afs.collection('Resources', ref => ref.where('uid', '==', `${this.currentUser.uid}`)).snapshotChanges()
  .pipe(map(actions => actions.map(this.documentToDomainObject)));
}
updateResource(id, num){
  console.log("updating post")
console.log(id, num)
  this.resourceDoc= this.afs.doc<Resource>
  ('Resources/' + `${id}`)
  if(num === 1){
    this.resourceDoc.update({claimedBy: null})
  }
  if(num ===2){
    this.resourceDoc.update({claimedBy:this.currentUser.uid})
  }
}
populateResources(){

  let names: string[] = ["mr joe", "ms baker", "earl swetshirt", "old man jenkins", "carl carlson", "mr doobles", "Mike Bloomberg"]
  let needs: string[] = ["I have a food bank", "I have medical supplies", "I can walk dogs", "I can dishes", "I can translate spanish"]
  let contact:string = "123456789"
  let time = Date.now();
   let location = "bushwick brooklyn"
   
  for ( let i=0; i<20; i++){
    setTimeout( ()=> {
      console.log("waiting .2 seconds"), 200
    })
    let num1 = Math.floor((Math.random() * 6))
    let num2 = Math.floor((Math.random() * 4))

    console.log(num1, num2)
    let resource = {
    
      author: names[num1],
      text: needs[num2],
      contact:contact,
      time: Date.now(),
      location:location,
      numberAvailable: Math.floor((Math.random() * 100)),
      isAvailable: true
};
console.log(resource)
this.createResource(resource)
}
}
}
