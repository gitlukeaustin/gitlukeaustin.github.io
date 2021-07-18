import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
