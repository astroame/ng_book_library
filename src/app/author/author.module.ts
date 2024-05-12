import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule
  ]
})
export class AuthorModule { }
