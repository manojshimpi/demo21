import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { regiroutedetails } from './rgidetails.module';
import { RegiComponent } from './regi.component';


@NgModule({
  declarations: [RegiComponent],
  exports:[RegiComponent],
  imports: [
    RouterModule.forChild(regiroutedetails),
    CommonModule
  ]
})
export class RgimoModule { }
