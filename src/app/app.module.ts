import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";

import { FooterComponent, HeaderComponent, ApiService, UserService, JwtService } from "./core";

const rootRoutes: Routes = [{ path: '**', redirectTo: '' }];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [JwtService, ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
