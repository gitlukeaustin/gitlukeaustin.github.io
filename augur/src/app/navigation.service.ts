import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {



  skipClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  toggleLanguage() {
    this.skipClicked.next(true);
  }
}
