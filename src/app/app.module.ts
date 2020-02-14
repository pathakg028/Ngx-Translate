import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MenuComponent } from './includes/menu/menu.component';
import { AppRoutingModule } from './app.routing.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LangTranslateModule } from './appModules/lang-translate.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LangTranslateModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App Module loaded')
  }
}
