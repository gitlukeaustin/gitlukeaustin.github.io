import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  titles = [
    "Ingénieur Informatique",
    "Bilingue Anglais - Français (Américain)",
    "4 Ans d'Expérience Développement Web"
  ];
  
  bannerText = "";
  //intervalId = setTimeout(x =>this.updateBanner(),200);
  
  currentTitle = 0;
  titleIndex = 0;

  constructor() { }


  ngOnInit(): void {
   
  }

  /*updateBanner(): void {
    var title1 = this.titles[(this.currentTitle) % 3];
    var title2 = this.titles[(this.currentTitle+1) % 3];
    var longest = title1.length > title2.length? title1.length: title2.length;

    this.bannerText = title2.substring(0,this.titleIndex) + title1.substring(this.titleIndex, longest);
      
    this.titleIndex++;
    if(this.titleIndex > longest) {
      this.titleIndex = 0;
      this.currentTitle++;
      clearTimeout(this.intervalId);
      this.intervalId = setTimeout(x => this.updateBanner(),2000);
    } else {
      clearTimeout(this.intervalId);
      this.intervalId = setTimeout(x => this.updateBanner(),80);
    }
  }*/
  


  ngOnDestroy() {
    //clearInterval(this.intervalId);
  }
}
