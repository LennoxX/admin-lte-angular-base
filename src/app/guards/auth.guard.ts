import { AuthService } from './../services/auth-service.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private readonly API_PATH = `${environment.BASE_URL}`

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return new Observable<boolean>(obs => {


      this.authService.validate().subscribe(
        data => {         
            obs.next(true);
          }, err => {
            this.router.navigateByUrl("/auth/sign-in")
            obs.next(false);
          }
     
        
      );

    });




  }
}
