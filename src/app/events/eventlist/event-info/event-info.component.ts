import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Event} from '../../event.model';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EventService) { }

   InfoEvent: Event;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params.id);
     this.InfoEvent = this.service.GetEvent(params.id);

    });
  }

}
