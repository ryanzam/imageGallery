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
import {UploadService} from "./upload.service";
import { SigninComponent } from './signin/signin.component';
import {AuthenticationService} from "./authentication.service";
import {AngularFireAuthModule} from "angularfire2/auth";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatMenuModule} from '@angular/material';
import {FlashMessagesModule} from "angular2-flash-messages";



@NgModule({
  declarations: [
    AppComponent,
    ImgGalleryComponent,
    ImgDetailsComponent,
    MenuBarComponent,
    UploadComponent,
    SigninComponent
  ],
  imports: [
    FlashMessagesModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ImageService, UploadService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
