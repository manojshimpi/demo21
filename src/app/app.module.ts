import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { FooterComponent } from './website/footer/footer.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { PackagesComponent } from './website/packages/packages.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { PricingComponent } from './website/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    PackagesComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
