import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

import { ProjectService } from '../project.service';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail-list',
  templateUrl: './project-detail-list.component.html',
  styleUrls: ['./project-detail-list.component.css']
})
export class ProjectDetailListComponent implements OnInit {

  projects: Project[];

  imageDirectory = "./assets/images/";

  subscription : Subscription;

  toggleEnglish = true;

  using = "using";

  written = "written in";

  constructor(private projectService: ProjectService, private navigationService: NavigationService) { 
    
      this.subscription = navigationService.skipClicked.subscribe( value => {
        if (value === true) {
            console.log("!"); 
            this.updateLanguage();
        }
    });

  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects.sort((x,y) =>  x.id - y.id).filter(x=>x.english==this.toggleEnglish));
  }

  updateLanguage(){
    this.toggleEnglish = !this.toggleEnglish;
    if(this.toggleEnglish){
      this.using = "using";

      this.written = "written in";
    } else {
      this.using = "avec";

      this.written = "écrit en";
    }
    this.getProjects();
  }

}
