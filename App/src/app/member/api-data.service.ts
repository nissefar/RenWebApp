import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
ApiPath: String;
  constructor(private http: HttpClient) {
    this.ApiPath = "http://localhost:3000";
   }

  login(member: Member): Observable<any>{
    return this.http.post(this.ApiPath + "/login/members/", member);
  }

  postMember(member: Member): Observable<any> {
    return this.http.post(this.ApiPath + "/members", member);
  }

  validateMember(email: string, token: string):Observable<Member>{
    let options: any = {
      headers: {'authorization': token},
      body: { 'body': {'email': email }
  }
    }
    let member: any = this.http.get(this.ApiPath+ "/members/" + email, options);
    return member;
  }

}
