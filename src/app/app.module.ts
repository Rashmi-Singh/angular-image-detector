import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  FileUploadModule,
  InputTextModule,
} from 'primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageClassfierUploadComponent } from './image-classifier-upload/image-classifier-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageClassfierUploadComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
