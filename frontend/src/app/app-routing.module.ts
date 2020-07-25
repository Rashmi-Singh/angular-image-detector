import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentModifierComponent } from './document-modifier/document-modifier.component';
import { ImageClassfierUploadComponent } from './image-classifier-upload/image-classifier-upload.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  { path: 'modify-document', component: DocumentModifierComponent },
  { path: 'identify-image', component: ImageClassfierUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
