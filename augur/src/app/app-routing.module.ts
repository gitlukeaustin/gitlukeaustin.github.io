import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
