import { MessageService } from 'primeng/api';
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
  loading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    Username: new FormControl(),
    Password: new FormControl()
  });
  constructor(private formBuilder: FormBuilder,
     private authService: AuthService, 
     private tokenService: TokenService,
     private router: Router, 
     private messageService: MessageService) { }

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
    this.loading = true;
    setTimeout(() => {
      this.authService.signin(this.loginForm.value).subscribe((res: any) => {
        console.log(res)
        this.tokenService.storeToken(res.token);
        this.tokenService.storeUser(res.user)
        this.router.navigateByUrl("/");
      },
        (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Ocorreu um erro ao processar sua solicitação!',
            detail: err.error.message
        });
          this.loading = false;
        }
      );
    }, 3000)

  }

}
