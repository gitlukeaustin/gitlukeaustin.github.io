import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavigationService } from '../navigation.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  works = null;

  schools = null;
  

  @Input() toggleEnglish: boolean;

  constructor(private dataService: DataService) { 
}

  ngOnInit(): void {
    this.getWorks();
    this.getSchools();
  }

  getWorks() {
    this.dataService.getWork().subscribe(w => this.works = w);
  }

  getSchools() {
    this.dataService.getSchool().subscribe(s => this.schools = s);
  }

}
