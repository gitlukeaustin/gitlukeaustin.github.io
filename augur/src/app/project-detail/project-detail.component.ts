import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project;

  constructor(private route: ActivatedRoute,
    private projectService: DataService,
    private location: Location
    ) { }

  
  imageDirectory = "./assets/images/";

  ngOnInit(): void {
    this.getProject();
  }
  
  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
    
  
  }

  
  goBack(): void {
    this.location.back();
  }

}
