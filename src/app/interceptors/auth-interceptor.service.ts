import { TokenService } from './../services/token-service.service';


import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    let authRequest: any;
    authRequest = req.clone({
      setHeaders: {
        Authorization: `${this.tokenService.getToken()}`
      }
    });
    return next.handle(authRequest);

  }


}