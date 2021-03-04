import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onLogIn(): void {
    this.authService.logIn();
    this.router.navigateByUrl('/listview');
  }
}
