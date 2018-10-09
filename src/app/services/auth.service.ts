import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: any;

  constructor(private _auth: AngularFireAuth) { }

  registerUser(authData: any): void {
    // this._uiService.loadingStateChanged.next(true);
    this._auth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        // this._uiService.loadingStateChanged.next(false);
        this._user = this._auth.authState;
        // this._router.navigate(['/training']);
      })
      .catch(error => {
        // this._uiService.loadingStateChanged.next(false);
        // this._uiService.showError(error.message, null, 4000);
      });
  }

}
