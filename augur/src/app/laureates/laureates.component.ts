import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-laureates',
  templateUrl: './laureates.component.html',
  styleUrls: ['./laureates.component.css']
})
export class LaureatesComponent implements OnInit {
  @Input() toggleEnglish: boolean;
  
  laureates = null;

  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.getLaureates();
  }

  getLaureates(): void {
    this.dataService.getLaureates().subscribe(l => this.laureates = l);
  }

}
