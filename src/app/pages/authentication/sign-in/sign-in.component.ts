import { TokenService } from './../../../services/token-service.service';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    Username: new FormControl(),
    Password: new FormControl()
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe((res: any) => {
      this.tokenService.storeToken(res.token);
      this.router.navigateByUrl("/");
    },
      (err) => {
        console.log(err);
      }
    );
  }

}
