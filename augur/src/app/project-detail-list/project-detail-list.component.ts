import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail-list',
  templateUrl: './project-detail-list.component.html',
  styleUrls: ['./project-detail-list.component.css']
})
export class ProjectDetailListComponent implements OnInit {

  projects = null;

  imageDirectory = "./assets/images/";


  @Input() toggleEnglish: boolean;

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.dataService.getProjects().subscribe(projects => this.projects = projects);
  }


}
