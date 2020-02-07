import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login.component';

import { DetailsRoutes } from './detailroute.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// i have added the lazy load routing code -> code chunk from app module 
@NgModule({
  declarations: [LoginComponent],

  exports: [LoginComponent],
  
  imports: [
  
  RouterModule.forChild(DetailsRoutes),
 // For Form data Siubmit
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule

  ]
  })

export class LogrModule {
 }

 
