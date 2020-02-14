import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loadingBar: LoadingBarService, 
    public translate:TranslateService) { }

  ngOnInit() {
  }

  startLoading() {
    this.loadingBar.start();
  }
  
  stopLoading() {
    this.loadingBar.complete();
  }
}
