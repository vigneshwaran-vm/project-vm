import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from "../core/core.module";
import { HomeComponent } from "./home.component";

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
