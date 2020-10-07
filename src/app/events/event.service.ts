import { EventEmitter, Injectable } from '@angular/core';
import {Event} from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  refreshList = new EventEmitter<Event[]>();
  edititem = new EventEmitter<Event>();

  EditEvents: Event;
  NewEvent: Event;
  Events: Event [] = [

    new Event ('Js event1', '2020-10-20', 'desc1', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 0),
  new Event ('Js even2', '2020-10-02', 'desc2', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 1 ),
  new Event ('Js event3', '2020-10-31', 'desc3', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 2 )
  ];

  getAllEvents(): Event[]
  {
    return this.Events.slice();
  }

  AddEvent(newEvent: Event): void
  {
    newEvent.id = this.Events.length;
    this.Events.push(newEvent);
    this.refreshList.emit(this.Events.slice());
  }

  GetEvent(id: number): Event
  {
    return this.Events[id];
  }

  GetEditEvent(id: number ): Event
  {
    this.EditEvents = this.Events.find(x => x.id === id);
    this.edititem.emit(this.EditEvents);
    return this.EditEvents;
  }

  EditEvent(event: Event): void
  {
    this.NewEvent = this.Events.find(x => x.id === event.id);
    this.NewEvent.name = event.name;
    this.NewEvent.dateStarted = event.dateStarted;
    this.NewEvent.description = event.description;
    this.NewEvent.imageUrl = event.imageUrl;
    console.log(event.id);
    this.refreshList.emit(this.Events.slice());

  }

constructor() { }

}
