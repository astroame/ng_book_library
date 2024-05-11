import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


/**
 * This includes singleton services, universal components, and other features where a single instance should be created and shared.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule]
})
export class CoreModule { }
