import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss', '../styles.scss']
})
export class ToolBoxComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
