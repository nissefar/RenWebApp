import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './workspace-sidebar/sidebar-content/project-list/project/project.component';
import { ProjectListComponent } from './workspace-sidebar/sidebar-content/project-list/project-list.component';
import { WorkspaceViewWindowComponent } from '../workspace-view-window/workspace-view-window.component';
import { ProfilePictureComponent } from './workspace-sidebar/sidebar-content/profile-picture/profile-picture.component';
import { ProfileEditComponent } from './workspace-sidebar/sidebar-content/profile/profile-edit/profile-edit.component';
import { DragareaComponent } from './dragarea/dragarea/dragarea.component';



export const routes: Routes = [
  { path: '', component: ProfilePictureComponent, outlet: "profileOutlet"},
  { path: 'edit', component: ProfileEditComponent, outlet: "profileOutlet"},
  { path: 'projects/:project', component: ProjectComponent},
  { path: 'projects/:project', component: DragareaComponent, outlet: "viewWindow"},
  // { path: 'projects/:project', component: WorkspaceViewWindowComponent, outlet: "viewWindow"},
  { path: '' , component: ProjectListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
