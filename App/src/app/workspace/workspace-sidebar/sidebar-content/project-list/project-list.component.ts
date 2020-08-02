import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/Api-Services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss', '../styles.scss']
})
export class ProjectListComponent implements OnInit {
  public isCollapsed = false;
  files = [];
  constructor(private apiDataService: ApiDataService, private router: Router, private route: ActivatedRoute) { }

  updateList($event): void{
    this.apiDataService.getProjects(localStorage.getItem('Token'))
    .subscribe(
      result => {
        this.files = result;
        if($event.projectVal){
          this.router.navigate([ { outlets: { primary: [ 'projects', $event.projectVal ], viewWindow: [ 'projects', $event.projectVal]  }}], { relativeTo: this.route });
        }
      },
      error => {
        console.log(error);
      }
    )

  }

  ngOnInit(): void {
   this.updateList({});
  }

}
