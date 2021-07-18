import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toggleEnglish = true;
  subscription : Subscription;

  constructor(private navigationService: NavigationService) { 
    this.subscription = navigationService.skipClicked.subscribe( value => {
      if (value === true) {
          console.log("!"); 
          this.updateLanguage();
      }
  });
}

updateLanguage(){
  this.toggleEnglish = !this.toggleEnglish;
}

  ngOnInit(): void {
  }

}
