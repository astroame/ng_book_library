import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


/**
 * This includes singleton services, universal components, and other features where a single instance should be created and shared.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [HttpClientModule, RouterModule]
})
export class CoreModule { }
