import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';
import { Member } from '../member/member';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInService {
  member: Member;
  constructor(private apiDataService: ApiDataService) {

  }

  getCurrentUser(): Member {


    if(localStorage.getItem('Token') != null){
      this.apiDataService.validateMember(localStorage.getItem('Email'),localStorage.getItem('Token'))
      .subscribe(
        result => this.member =result,
        error => console.log(error)
        )
    }

    return this.member;
  }

  login(member: Member): void {
    this.member = member;
  }

  logut(): void {
    this.member = {};
  }
}
