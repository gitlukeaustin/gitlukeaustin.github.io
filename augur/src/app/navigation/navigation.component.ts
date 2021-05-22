import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  @Output() viewDirection = "card";

  darkMode = "dark";

  isEnglish = "english";

  toggleView = function(): void {
    this.viewDirection = this.viewDirection == "card"? "list": "card";
    document.getElementById("style-controle").className = this.viewDirection + " " + this.darkMode + this.isEnglish;

  }

  toggleDarkMode = function(): void {
    this.darkMode = this.darkMode === "dark" ? "light" : "dark";
    document.getElementById("style-controle").className = this.darkMode + " " + this.viewDirection + this.isEnglish;
  }

  toggleLanguage = function(): void {
    this.isEnglish = this.isEnglish  === "english" ? "french" : "english";
    document.getElementById("style-controle").className = this.darkMode + " " + this.viewDirection + " " + this.isEnglish; 
    this.navigationService.toggleLanguage();
    //this.skipClicked.next(true);
  }

  ngOnInit(): void {
  }

}
