import { Post } from './../models/post';
import { AngularFirestoreDocument,  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'






@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  posts:Observable<any>;
  users: Observable<any>;
  currentUser = JSON.parse(localStorage.getItem('user'))
  private postDoc: AngularFirestoreDocument<Post>
  
  constructor(private router:Router, private afs: AngularFirestore,) {
    this.postsCollection = afs.collection<Post>("Posts");
    this.users =
    this.afs.collection('users').snapshotChanges()
    
    this.posts = 
    this.afs.collection('Posts').snapshotChanges()
    .pipe(map(actions => actions.map(this.documentToDomainObject)));
   }
   documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
}

populatePosts(){
  let names: string[] = ["mr joe", "ms baker", "earl swetshirt", "old man jenkins", "carl carlson", "mr doobles"]
  let needs: string[] = ["can someone get my laundry", "can someone walk my dog", "can someone buy me food", "can someone call my house"]
  let contact:string = "123456789"
  let time = Date.now();
   let location = "bushwick brooklyn"
   
  for ( let i=0; i<50; i++){
    let num1 = (Math.floor(Math.random() * (5 - 0 + 1)) + 0)
    let num2 = (Math.floor(Math.random() * (3- 0 + 1)) + 0)

    console.log(num1, num2)
    let post = {
    
      author: names[ num1],
      text: needs[ num2],
      contact:contact,
      time: Date.now(),
      location:location,
};
console.log(post)
this.createPost(post)
}
}
  createPost(post){
    console.log(this.currentUser)
    post.uid = this.currentUser['uid']
    post.claimedBy=""
     this.postsCollection.add(post).then(()=>
    this.router.navigate(['/profile']))
  }
  deletePost(id){
    this.afs.doc<Post>('Posts/'+id).delete()
   }
   getUsers(){
     return this.users
   }
   getPosts(){
    return  this.afs.collection('Posts').snapshotChanges()
    .pipe(map(actions => actions.map(this.documentToDomainObject)));
   }
   getPost(id){
    return this.afs.doc<Post>('Posts/'+id).valueChanges()
    
 }
 getUserPosts(){
  
  return this.afs.collection('Posts', ref => ref.where('claimedBy', '==', `${this.currentUser.uid}`)).snapshotChanges()
  .pipe(map(actions => actions.map(this.documentToDomainObject)));
}
getUserPublishedPosts(){
  return this.afs.collection('Posts', ref => ref.where('uid', '==', `${this.currentUser.uid}`)).snapshotChanges()
  .pipe(map(actions => actions.map(this.documentToDomainObject)));
}
updatePost(id, num){
  console.log("updating post")
console.log(id, num)
  this.postDoc = this.afs.doc<Post>
  ('Posts/' + `${id}`)
  if(num === 1){
    this.postDoc.update({claimedBy: null})
  }
  if(num ===2){
    this.postDoc.update({claimedBy:this.currentUser.uid})
  }
}
  
}
 


