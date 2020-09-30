import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventItemComponent } from './events/eventlist/event-item/event-item.component';
import { HeaderComponent } from './events/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventItemComponent,
    AddEventComponent,
    EventlistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
