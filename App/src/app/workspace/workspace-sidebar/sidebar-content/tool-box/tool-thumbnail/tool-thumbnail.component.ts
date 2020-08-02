import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-thumbnail',
template: `
<div class="container toolContainer"><h6> <button class="transparent-button"><img class="SmallThumbnail" src="assets/images/plus.png"></button> <img class="SmallThumbnail" [src]="iconName">   {{headerText}}  </h6></div>`,
  styleUrls: ['./tool-thumbnail.component.scss', '../../styles.scss']
})
export class ToolThumbnailComponent implements OnInit {
  @Input() toolName: string;
  @Input() headerText: string;
  iconName: string;
  constructor() { }

  ngOnInit(): void {
    this.iconName = "assets/images/tools/" + this.toolName + ".png";

  }

}
