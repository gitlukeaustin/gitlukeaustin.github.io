import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /*project : Project = {
    id: 1,
    year: 2018,
    description: "A traditional tile based game",
    title: "Honshu",
    code: "",
    demo: "",
    language: "written in C using OpenGL"
  };*/

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }



  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

 
}
