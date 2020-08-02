import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiDataService } from 'src/app/Api-Services/api-data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss', '../../styles.scss']

})
export class NewProjectComponent implements OnInit {


  apiDataService:ApiDataService;
  project: string = "";
  isCollapsed: boolean = true;

  @Output() updateList: EventEmitter<any> = new EventEmitter();

  constructor(apiDataService: ApiDataService) {
    this.apiDataService = apiDataService;
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(localStorage.getItem('Token'), this.project)

    this.apiDataService.postProject(localStorage.getItem('Token'), this.project)
    .subscribe(
      result=> console.log(result),
      error=>console.log(error)
    )
    let projectVal = this.project;
    this.updateList.emit({projectVal});
  }

}
