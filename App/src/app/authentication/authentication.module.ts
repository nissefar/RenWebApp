import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './authentication-routing.module';
import { AuthenticationContainerComponent } from './authentication.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { CreateUserWindowComponent } from './create-user-window/create-user-window.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticationContainerComponent,
    LoginWindowComponent,
    CreateUserWindowComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
