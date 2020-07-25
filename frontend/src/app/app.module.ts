import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  FileUploadModule,
  InputTextModule,
  MultiSelectModule,
} from 'primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentModifierComponent } from './document-modifier/document-modifier.component';
import { ImageClassfierUploadComponent } from './image-classifier-upload/image-classifier-upload.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentModifierComponent,
    ImageClassfierUploadComponent,
    NavigationMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
