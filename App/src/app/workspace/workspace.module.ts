import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './workspace-sidebar/sidebar-content/project-list/project/project.component';
import { ProjectListComponent } from './workspace-sidebar/sidebar-content/project-list/project-list.component';
import { routes } from './workspace-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolBoxComponent } from './workspace-sidebar/sidebar-content/tool-box/tool-box.component';
import { WorkspaceSidebarComponent } from './workspace-sidebar/workspace-sidebar.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { WorkspaceViewWindowComponent } from '../workspace-view-window/workspace-view-window.component';
import { ToolContainerComponent } from './workspace-sidebar/sidebar-content/tool-box/tools/tool-container/tool-container.component';
import { ToolThumbnailComponent } from './workspace-sidebar/sidebar-content/tool-box/tool-thumbnail/tool-thumbnail.component';
import { NewProjectComponent } from './workspace-sidebar/sidebar-content/project-list/new-project/new-project.component';
import { ProfilePictureComponent } from './workspace-sidebar/sidebar-content/profile-picture/profile-picture.component';
import { ProfileEditComponent } from './workspace-sidebar/sidebar-content/profile/profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    WorkspaceSidebarComponent,
    WorkPageComponent,
    WorkspaceViewWindowComponent,
    ToolBoxComponent,
    ToolContainerComponent,
    ToolThumbnailComponent,
    NewProjectComponent,
    ProfilePictureComponent,
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule

  ]
})
export class WorkspaceModule { }
