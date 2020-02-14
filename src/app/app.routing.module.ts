import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloadingService } from './appServices/custom-preloading.service';

const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadChildren:'./home/home.module#HomeModule'},
    {path:'about', loadChildren:'./about/about.module#AboutModule'},
    {path:'contact', loadChildren:'./contact/contact.module#ContactModule'},

    // De Routes
    {path:'de/', redirectTo:'login', pathMatch:'full'},
    {path:'de/home', loadChildren:'./home/home.module#HomeModule'},
    {path:'de/about', loadChildren:'./about/about.module#AboutModule'},
    {path:'de/contact', loadChildren:'./contact/contact.module#ContactModule'},
    
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {
            preloadingStrategy : CustomPreloadingService
        })
    ],
    exports :[
        RouterModule
    ]
})

export class AppRoutingModule{}
