import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/Api-Services/api-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../../styles.scss']
})
export class ProjectComponent implements OnInit {
  constructor(private apiDataService: ApiDataService, private _route: ActivatedRoute) {  }

  isCollapsed = true;
  Project: string;
  projectFiles: string[] = [];

  getFileIcon(filename: string): string{
    let extention: string = filename.split('.').pop();
    let imagePath: string = '';
    let image = new Image();
    image.src = "assets/images/"+extention+".png";

    return imagePath;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.Project = params['project'];
    });

    this.apiDataService.getProjectFiles(localStorage.getItem('Token'), this.Project)
    .subscribe(
      result => this.projectFiles = result,
      error => console.log(error)
    );
  }

}
