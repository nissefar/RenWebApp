import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-container',
  templateUrl: './tool-container.component.html',
  styleUrls: ['./tool-container.component.scss']
})
export class ToolContainerComponent implements OnInit {
toolName: string = this.constructor.name;
headerText: string = "Division";

  constructor() {
  }

  ngOnInit(): void {
  }

}
