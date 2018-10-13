import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _snackBar: MatSnackBar,
              private _authService: AuthService) { }

  ngOnInit() {
    this._signInFormInit();
  }

  onSubmit() {
    console.log(this.signInForm.value);
    // this.openSnackBar('hello');
    this._authService.login(this.signInForm.value);
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', { duration: 3000 });
  }

  private _signInFormInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
    });
  }
}
