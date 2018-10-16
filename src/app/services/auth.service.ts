import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs/index';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {UiService} from "../shared/ui.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: Observable<firebase.User>;
  logged = new BehaviorSubject(false);

  constructor(private _auth: AngularFireAuth,
              private _afs: AngularFirestore,
              private _router: Router,
              private _uiService: UiService) { }

  registerUser(authData: any): void {
    // this._uiService.loadingStateChanged.next(true);
    console.log(authData);
    this._auth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res);
        // this._auth.auth.updateCurrentUser(authData).then((response) => {
        //   console.log(response);
        // });
        // this._uiService.loadingStateChanged.next(false);
        // this._router.navigate(['/training']);
      })
      .catch(error => {
        console.log(error);
        // this._uiService.loadingStateChanged.next(false);
        // this._uiService.showError(error.message, null, 4000);
      });
  }

  login(authData: any): void {
    this._auth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this._user = this._auth.authState;
      })
      .catch(error => {
        console.log(error);
        this._uiService.showError(error.message, null, 4000);
      });
  }

  logout(): void {
    this._afs.firestore.disableNetwork();
    this.logged.next(false);
    this._auth.auth.signOut().then(() => {
      this._router.navigate(['/']);
    });
  }
}
