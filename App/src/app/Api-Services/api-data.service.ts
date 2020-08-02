import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../member/member';
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

  patchMember(member: Member): Observable<any> {
    let options: any = {
      headers: {'authorization': localStorage.getItem('Token') }
    }
    return this.http.patch(this.ApiPath + "/members/" + member.email, member, options);

  }

  validateMember(email: string, token: string):Observable<Member>{
    let options: any = {
      headers: {'authorization': token }
    }
    let member: any = this.http.get(this.ApiPath+ "/members/" + email, options);
    return member;
  }

  getProjects(token: string):Observable<any>{
    let options: any = {
      headers: {'authorization': token }
    }
    let files = this.http.get(this.ApiPath+'/members/files', options);
    return files;
  }

  getProjectFiles(token: string, projectName: string):Observable<any>{
    let options: any = {
      headers: {'authorization': token }
    }
    let files = this.http.get(this.ApiPath+'/members/files/'+projectName, options);
    return files;
  }





  postProject(token: string, projectName: string){
    let options: any = {
      headers: { 'authorization': token },
       responseType: 'text'
    }
    return this.http.post(this.ApiPath+'/members/files/'+projectName,{},options);
  }


}
