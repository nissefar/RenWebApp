import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WorkPageComponent } from './workspace/work-page/work-page.component';
import { WorkspaceSidebarComponent } from './workspace/workspace-sidebar/workspace-sidebar.component';
import { ProjectListComponent } from './workspace/workspace-sidebar/sidebar-content/project-list/project-list.component';
import { ToolBoxComponent } from './workspace/workspace-sidebar/sidebar-content/tool-box/tool-box.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './authentication/auth-guard/auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
