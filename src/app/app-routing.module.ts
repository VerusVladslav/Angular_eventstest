import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { EventInfoComponent } from './events/eventlist/event-info/event-info.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';

import { EventsComponent } from './events/events.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeAppComponent },
  { path: 'events', pathMatch: 'full', component: EventsComponent},
  {path: 'show-my-events', component: EventlistComponent,
  children: [
    {path: ':id', component: EventInfoComponent}
  ]
},
  {
    path: 'about',
    component: AboutComponent,
    children: [
        {path: 'contact', component: ContactAppComponent},
        {path: 'info', component: InfoAppComponent},
        {path: ':id', component: TestComponent}
    ] },




  {path: '**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
