import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { PackagesComponent } from './website/packages/packages.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { PricingComponent } from './website/pricing/pricing.component';



const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path:'Gallery',component:GalleryComponent },
{ path:'About',component:AboutComponent },
{ path:'Contact',component:ContactComponent },
{ path:'Pricing' , component:PricingComponent},
{ path:'Packages',component:PackagesComponent },
  // i have called the lazy module
{
  path: 'Login',
  loadChildren: './assig/login/logr.module#LogrModule'
 },
 {
   path:'Register',
   loadChildren:'./assig/regi/regi.module#RgimoModule'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
