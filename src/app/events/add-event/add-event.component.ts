import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {Event} from '../event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {



  newTitle: string ;
  newDate: string ;
  newImage: string ;
  newDesc: string ;

  sendNewEvent(): void
  {
   const  newEvent = new  Event(this.newTitle, this.newDate, this.newDesc, this.newImage);
   console.log(this.newDate);
   this.eventService.AddEvent(newEvent);

  }

  constructor(private eventService: EventService) { }



   ngOnInit(): void {
  }

}
