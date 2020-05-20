import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member/member';
import { ApiDataService } from 'src/app/member/api-data.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {
  member: Member = { };
  apiDataService: ApiDataService;
  constructor(ApiDataService: ApiDataService) {
    this.apiDataService = ApiDataService;
   }

  ngOnInit(): void {
    this.apiDataService.validateMember(localStorage.getItem('Email'),localStorage.getItem('Token'))
    .subscribe(
      result => this.member = result,
      error => console.log(error)

    );
  }

}
