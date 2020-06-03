import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  apiPath: string = 'http://localhost:3000';
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  public canActivate(): boolean {

    let options: any = {
      headers: {'authorization': localStorage.getItem('Token')},
  }

    let rep: any = this.http.get(this.apiPath,options);
    console.log(rep);
    return rep;
  }

}

