import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member/member';
import { ApiDataService } from 'src/app/member/api-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {
  member: Member = { };
  searchParam: string;
  apiDataService: ApiDataService;
  constructor(ApiDataService: ApiDataService, private route: ActivatedRoute) {
    this.apiDataService = ApiDataService;
    this.route.params.subscribe(params => {
      this.searchParam = params['email'];
    })
   }

  ngOnInit(): void {
    this.apiDataService.validateMember(this.searchParam,localStorage.getItem('Token'))
    .subscribe(
      result => this.member = result,
      error => console.log(error)

    );
  }

}
