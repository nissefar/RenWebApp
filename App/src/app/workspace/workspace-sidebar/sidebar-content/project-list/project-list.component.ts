import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/member/api-data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss', '../styles.scss']
})
export class ProjectListComponent implements OnInit {
  public isCollapsed = true;
  files = [];
  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.apiDataService.getProjects(localStorage.getItem('Token'))
    .subscribe(
      result => {
        console.log(result);
        this.files = result;
      },
      error => {
        console.log(error);
      }
    )
  }

}
