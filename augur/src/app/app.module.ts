import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel is here?
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { CvComponent } from './cv/cv.component';
import { ProjectDetailListComponent } from './project-detail-list/project-detail-list.component';
import { SkillsComponent } from './skills/skills.component';
import { LaureatesComponent } from './laureates/laureates.component';
import { MainComponent } from './main/main.component';
import { ArrayPipePipe } from './array-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    NavigationComponent,
    CvComponent,
    ProjectDetailListComponent,
    SkillsComponent,
    LaureatesComponent,
    MainComponent,
    ArrayPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
