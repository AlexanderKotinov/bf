import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/index';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: Observable<firebase.User>;

  constructor(private _auth: AngularFireAuth) { }

  registerUser(authData: User): void {
    // this._uiService.loadingStateChanged.next(true);
    this._auth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        this._auth.auth.updateCurrentUser(this._user).then((response) =>
        {
          console.log(response);
        });
        // this._uiService.loadingStateChanged.next(false);
        // this._router.navigate(['/training']);
      })
      .catch(error => {
        // this._uiService.loadingStateChanged.next(false);
        // this._uiService.showError(error.message, null, 4000);
      });
  }

}
