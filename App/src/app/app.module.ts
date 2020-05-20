import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './authentication/login-window/login-window.component';
import { FormsModule } from '@angular/forms';
import { CreateUserWindowComponent } from './authentication/create-user-window/create-user-window.component';
import { AuthenticationContainerComponent } from './authentication/authentication.component';
import { WorkPageComponent } from './workspace/work-page/work-page.component';
import { WorkspaceSidebarComponent } from './workspace/workspace-sidebar/workspace-sidebar.component';
import { ProjectListComponent } from './workspace/project-list/project-list.component';
import { ToolBoxComponent } from './workspace/tool-box/tool-box.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkPageComponent,
    WorkspaceSidebarComponent,
    ProjectListComponent,
    ToolBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
