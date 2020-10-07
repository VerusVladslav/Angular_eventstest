import { Component, OnInit } from '@angular/core';
import {Event} from '../event.model';
import {EventService} from '../event.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  constructor(private service: EventService ) { }

  EditedEvent: Event;

  name: string;
  desc: string;
  img: string;
  date: string;
  private id: number ;
  Edit(): void
  {
    this.EditedEvent = new Event(this.name, this.date, this.desc, this.img, this.id);

    console.log(this.EditedEvent.id);

    this.service.EditEvent(this.EditedEvent);

  }

  ngOnInit(): void {
    this.service.edititem.subscribe((event: Event) => {
      this.name = event.name;
      this.date = event.dateStarted;
      this.desc = event.description;
      this.img = event.imageUrl;
      this.id = event.id;
      (document.getElementById('mytitle') as HTMLInputElement).value = event.name;
      (document.getElementById('myDescription')as HTMLInputElement).value = event.description;
      (document.getElementById('myImage')as HTMLInputElement).value = event.imageUrl;
      (document.getElementById('myDate')as HTMLInputElement).value = event.dateStarted;

    });
  }

}
