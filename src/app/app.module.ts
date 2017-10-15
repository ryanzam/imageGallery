import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';
import { ImgDetailsComponent } from './img-details/img-details.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {environment} from "../environments/environment";
import {ImageService} from "./image.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgGalleryComponent,
    ImgDetailsComponent,
    MenuBarComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
