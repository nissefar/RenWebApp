import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFileService {

ApiPath: String;

  constructor(private http: HttpClient) {
    this.ApiPath = "http://localhost:3000";
   }

   getFile(token: string, projectName: string, fileName: string):Observable<any>{
    let options: any = {
      headers: { 'authorization': token },
       responseType: 'text'
    }
    let file = this.http.get(this.ApiPath+'/members/files/'+projectName+'/'+fileName,options);
    return file;
  }

  postFile(fileToUpload: File): Observable<any> {
    let options: any = {
      headers: { 'authorization': localStorage.getItem('Token') },
       responseType: 'text'
    }

    const endpoint = this.ApiPath+'/members/profilepic';
    let formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, options );
}

}
