import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  goBackLink = new BehaviorSubject({ text:'', url:''});  // For Back Link
  loggedInUser = new BehaviorSubject('');  // For Back Link
  headerNav = new BehaviorSubject(true);  // For Header Color
  headerContactDetails = new BehaviorSubject(false);  // For Header Contact Details
  headerLoginBlock = new BehaviorSubject(true);  // For Header Login Block
  selectedLang = new BehaviorSubject('');
  pageName = new BehaviorSubject('');

}
