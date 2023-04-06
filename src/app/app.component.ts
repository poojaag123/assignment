import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';
//import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'google-signin';
  user: gapi.auth2.GoogleUser;
  data: any;

  constructor(
    private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.signInService.observable().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
    });
  }
  signIn() {
    this.signInService.signin();
  }

  signOut() {
    this.signInService.signout();
  }
}
