import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { CoreModule } from "../core/core.module";
import { NoAuthGuardService } from "../core/services";

const authRoutes: Routes = [
  { path: '', component: AuthComponent, canActivate: [NoAuthGuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule, RouterModule.forRoot(authRoutes)
  ],
  declarations: [AuthComponent],
  providers: [NoAuthGuardService]

})
export class AuthModule { }
