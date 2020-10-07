import { Component, OnInit } from '@angular/core';

import {Event} from '../event.model';
import {EventService} from '../event.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {


  constructor(private eventService: EventService) { }



  Events: Event [];
  HideEvents: Event [];

  hideEvent(): void
  {

  //  this.HideEvents.push(this.Events.find(x=>{
  //    x.isVisible==false;
  //  }));
  //  console.log(this.Events);
  }




  ngOnInit(): void {
   this.Events = this.eventService.getAllEvents();
   this.eventService.refreshList.subscribe((events: Event[]) => {
     this.Events = events;
   });
  }

}
