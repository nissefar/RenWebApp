import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiDataService } from '../../Api-Services/api-data.service';
import { Member } from '../../member/member';
import { Router } from '@angular/router';
import { UserLoggedInService } from 'src/app/Api-Services/user-logged-in.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: [
    './login-window.component.scss',
    '../../../assets/shared-styles/authentication-content-shared.scss'
  ]
})
export class LoginWindowComponent implements OnInit {
  apiDataService:ApiDataService;
  member: Member = {};

  constructor(private ApiDataService: ApiDataService, public Router: Router, private userLoggedIn: UserLoggedInService) {
    this.apiDataService = ApiDataService;
   }

   storeToken(loginResponse: any){
    localStorage.setItem('Token', loginResponse.token);
    localStorage.setItem('Email', loginResponse.user.email);
    this.Router.navigate(['workspace']);
 }

   onSubmit(form: NgForm){
    this.ApiDataService.login(this.member)
    .subscribe(
      result => {
        (result.success) ? this.storeToken(result) : console.log("Incorrect password");
      },
      error => {
        console.log('error ', error);
      }
    );
  }



 ngOnInit(): void {
  }

}
