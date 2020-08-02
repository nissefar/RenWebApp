import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeStyle, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { ApiFileService } from '../Api-Services/api-file.service';

@Component({
  selector: 'app-workspace-view-window',
  templateUrl: './workspace-view-window.component.html',
  styleUrls: ['./workspace-view-window.component.scss']
})
export class WorkspaceViewWindowComponent implements OnInit {

  constructor(private apiFileService: ApiFileService, private _route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.token = localStorage.getItem('Token');

   }
  index: SafeHtml = "";
  projectName: string = "";
  token: string = "";
  styleURL: string = "";
  styleURLSafe: SafeResourceUrl;

  ngOnInit(): void {
    this._route.params
    .subscribe(params =>
      this.projectName = params['project']
    );

    this.styleURL = "http://localhost:3000/members/files/" + this.projectName + "/style.css/" + this.token + "/";
    this.styleURLSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.styleURL);

    this.apiFileService.getFile(localStorage.getItem('Token'), this.projectName, "index.html")
    .subscribe(
      result =>{
        this.index = this.sanitizer.bypassSecurityTrustHtml(result);
      },
      error => console.log(error)
    );
  }

}
