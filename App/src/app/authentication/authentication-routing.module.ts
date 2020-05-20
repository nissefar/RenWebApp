import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginWindowComponent } from './login-window/login-window.component';
import { CreateUserWindowComponent } from './create-user-window/create-user-window.component';
import { WorkPageComponent } from '../../app/workspace/work-page/work-page.component'
import { AuthenticationContainerComponent } from './authentication.component'



export const routes: Routes = [
  { path: '', redirectTo: 'login'},
  { path: 'login', component: LoginWindowComponent },
  { path: 'createuser', component: CreateUserWindowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
