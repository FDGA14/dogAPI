import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailsComponent } from './dog-details.component';

const routes: Routes = [{ path: '', component: DogDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogDetailsRoutingModule { }
