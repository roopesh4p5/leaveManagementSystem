import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ApplyleaveComponent } from './user/applyleave/applyleave.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyleaverecordsComponent } from './user/myleaverecords/myleaverecords.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddnewempComponent,
    HomeComponent,
    LoginComponent,
    ApplyleaveComponent,
    PagenotfoundComponent,
    MyleaverecordsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
