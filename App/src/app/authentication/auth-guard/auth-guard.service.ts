//Denne service er taget fra https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public Auth: AuthService, public Router: Router) { }

    canActivate(): boolean{
      if(!this.Auth.isAuthenticated()){
        this.Router.navigate(['authentication']);
        return false;
      }

      return true;
   }

}
