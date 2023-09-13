import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path:'' ,component:HomeComponent,pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'addnewemp', component:AddnewempComponent},
  { path: 'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
