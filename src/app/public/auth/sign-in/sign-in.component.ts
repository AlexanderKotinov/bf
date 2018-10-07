import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._signInFormInit();
  }

  onSubmit() {
    console.log(this.signInForm.value);
    this.openSnackBar('hello');
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
