import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._signUpFormInit();
  }

  onSubmit() {
    this._authService.registerUser(this.signUpForm.value);
  }

  private _signUpFormInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    });
  }
}
