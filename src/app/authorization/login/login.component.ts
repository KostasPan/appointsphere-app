import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthorizationService } from './../authorization.service';
import { ILogin } from '../authorization.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('login init');
  }

  login() {
    if (this.loginForm.valid) {
      // Here you can implement your login logic
      console.log('Logging in...');
      const loginPayload: ILogin = this.getLoginPayload();
      this.authorizationService.login(loginPayload).subscribe((data) => {
        console.log('test');
      });
    }
  }

  getLoginPayload(): ILogin {
    return {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    }
  }
}
