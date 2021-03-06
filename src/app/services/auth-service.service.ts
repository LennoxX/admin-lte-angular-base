import { TokenService } from './token-service.service';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  protected readonly API_PATH = `${environment.BASE_URL}`
  constructor(private http:HttpClient, private tokenService:TokenService, private router: Router) {
  }

  public signin(user: User): Observable<any> {
    return this.http.post(`${this.API_PATH}auth/signin`,user);
  }

  public validate() : Observable<any>{
    return this.http.get(`${this.API_PATH}auth/validate`);
  
  }

  public signout(){
    this.tokenService.deleteToken();
    this.router.navigateByUrl("/auth/sign-in");
  }

  
  

  
}
