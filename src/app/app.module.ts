import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventItemComponent } from './events/eventlist/event-item/event-item.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { EditComponentComponent } from './events/edit-component/edit-component.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { Page404Component } from './page404/page404.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';





@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventItemComponent,
    AddEventComponent,
    EventlistComponent,
    HeaderComponent,
    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskAddComponent,
    EditComponentComponent,
    HomeAppComponent,
      Page404Component,
      InfoAppComponent,
      ContactAppComponent,
      AboutComponent,
      TestComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
