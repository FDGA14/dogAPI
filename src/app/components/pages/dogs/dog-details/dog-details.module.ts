import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogDetailsRoutingModule } from './dog-details-routing.module';
import { DogDetailsComponent } from './dog-details.component';


@NgModule({
  declarations: [
    DogDetailsComponent
  ],
  imports: [
    CommonModule,
    DogDetailsRoutingModule
  ]
})
export class DogDetailsModule { }
