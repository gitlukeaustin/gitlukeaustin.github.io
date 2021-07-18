import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})



export class SkillsComponent implements OnInit {
  
  skills = null;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getSkills();  
  }

  getSkills(){
    this.dataService.getSkills().subscribe(s => this.skills = s);
  }

}
