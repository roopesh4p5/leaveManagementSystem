import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ApplyleaveComponent } from './user/applyleave/applyleave.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addnewemp', component: AddnewempComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home/:id/applyleave',
    component: ApplyleaveComponent // Replace 'ApplyLeaveComponent' with the actual component name for applying leave
  },
  { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
