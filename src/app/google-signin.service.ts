import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSigninService {
  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '228080246400-n1tciu09ntqqlfg2bmo5g97i38jus5nc.apps.googleusercontent.com',
      });
    });
  }

  public signin() {
    this.auth2
      .signIn({
        //
        scope: 'https://www.googleapis.com/auth/gmail.readonly',
      })
      .then((user) => {
        this.subject.next(user);
      })
      .catch(() => {
        this.subject.next(null);
      });
  }

  public signout() {
    this.auth2.signOut().then(() => {
      this.subject.next(null);
    });
  }

  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
