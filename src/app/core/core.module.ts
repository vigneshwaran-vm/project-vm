import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ShowAuthedDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    ShowAuthedDirective
  ],
  declarations: [ShowAuthedDirective]
})
export class CoreModule { }
