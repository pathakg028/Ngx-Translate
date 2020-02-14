import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  languageStatus; //get selectedLang
  constructor(public translate:TranslateService,
    private _header:HeaderService) { 
      this._header.selectedLang.subscribe(res =>{
        if(res =='de'){
          this.languageStatus = 'de'
        }else{
          this.languageStatus = ''
        }
      })
    }
    
  ngOnInit() {
  }

}
