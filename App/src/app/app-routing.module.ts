import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WorkPageComponent } from '../app/workspace/work-page/work-page.component';
import { AuthenticationContainerComponent } from './authentication/authentication.component';
import { AuthService } from './authentication/auth-service/auth.service';



const routes: Routes = [
  { path: 'authentication', component: AuthenticationContainerComponent, loadChildren: () => import('src/app/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'workspace/:email', component: WorkPageComponent, canActivate: [AuthService] },
  { path: 'workspace', redirectTo: 'workspace/' + localStorage.getItem('Email')},
  { path : '', redirectTo: 'authentication', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
