import { Component, ViewChild, ElementRef, Injectable, Output, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ["./register.css"]
})
export class Register  {
  user: Observable<firebase.User>;
  name : string;
  email : string;
  auth;
  @ViewChild('username') inputUsername:ElementRef; 
  @ViewChild('password') inputPasssword:ElementRef; 

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.afAuth.authState.subscribe(auth => this.updateName(auth)
    );
  }
  updateName(auth) {
    this.name = auth.displayName;
    this.email = auth.email;
    this.auth = auth;
    
  }
  registerGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  registerFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  registerEmail() {
    var userEmail = this.inputUsername.nativeElement.value;
    var userPassword = this.inputPasssword.nativeElement.value;
    this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword);
  }
  login() {
    var userEmail = this.inputUsername.nativeElement.value;
    var userPassword = this.inputPasssword.nativeElement.value;
    this.afAuth.auth.signInWithEmailAndPassword(userEmail, userPassword);
  }
}
