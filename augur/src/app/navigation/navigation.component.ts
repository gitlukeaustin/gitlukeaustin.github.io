import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  @Output() viewDirection = "card";

  darkMode = "dark";

   


  toggleView = function(): void {
    this.viewDirection = this.viewDirection == "card"? "list": "card";
    document.getElementById("style-controle").className = this.viewDirection + " " + this.darkMode;

  }

  toggleDarkMode = function(): void {
    this.darkMode = this.darkMode === "dark" ? "light" : "dark";
    document.getElementById("style-controle").className = this.darkMode + " " + this.viewDirection;
  }

  ngOnInit(): void {
  }

}
