import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CloudinaryModule } from '@cloudinary/angular';

import * as  Cloudinary from 'cloudinary-core';
// import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // CloudinaryModule
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'christekh'}),
  ],
  providers: [
    // provideCloudinary(require('cloudinary-core'), { cloud_name: 'christekh' } as CloudinaryConfiguration)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
