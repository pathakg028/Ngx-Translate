import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
    //-------------------------------------------// 
   // New Properties for Updated Header Concepts//
  //-------------------------------------------// 

  goBackLink; //For Go Back Link
  loggedInUser; // For LoggedIn User
  headerNav; // For Header Menu
  headerContactDetails; // For Header Contact Details
  headerLoginBlock; //For Header Login Block
  switchLang;
  browserLang;
  pageName //get Page Name
  constructor(private _header:HeaderService, private router:Router,
    public translate:TranslateService) {
  
    this._header.selectedLang.subscribe(res =>{
      this.browserLang = res;
      this.switchLang = res;
      this.languageChanged();
    })

    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    this.languageChanged();
    this._header.selectedLang.next(this.browserLang)


    //For Go Back Link
    this._header.goBackLink.subscribe(res =>{
      this.goBackLink = res
    })
  
    //For LoggedIn User
    this._header.loggedInUser.subscribe(res =>{
      this.loggedInUser = res
    })

    //For show/hide Header Menu
    this._header.headerNav.subscribe(res =>{
      this.headerNav=res;
    })

    //For Header Contact Details
    this._header.headerContactDetails.subscribe(res =>{
      this.headerContactDetails=res;
    })

    //For Header Login Block
    this._header.headerLoginBlock.subscribe(res =>{
      this.headerLoginBlock=res;
    })

    //Get Page Name
    this._header.pageName.subscribe(res =>{
      this.pageName = res
    })
  }

  onSignInButtonClick(){
    this.router.navigate(['login'])
    setTimeout(() => {
      document.getElementById('inputUser').focus()  
    }, 500);
  }
  onLogOut(){
    this._header.loggedInUser.next('');
    this.router.navigate(['login'])
  }

  selectedLanguage(lang){
    console.log(lang);
    // this.switchLang = lang
    this._header.selectedLang.next(lang)
  }
  languageChanged(){
    this.translate.use(this.browserLang.match(/de|en/)? this.browserLang :'en')
  }
  ngOnInit() {
  }

}
