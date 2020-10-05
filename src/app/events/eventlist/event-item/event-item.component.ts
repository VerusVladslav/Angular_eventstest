import { Component, Input, OnInit } from '@angular/core';

import {Event} from '../../event.model';
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {


  // title:string="Test title";
  // image:string="https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/";

  @Input() currentEvent: Event;


  isVisible: boolean = true;
  isPriority: boolean = false;

  setVisible()
  {
    this.currentEvent.isVisible = !this.currentEvent.isVisible;
    this. isVisible = !this.isVisible;
  }

  setPriority()
  {
    this.isPriority = !this.isPriority;
  }

 constructor() { }

  ngOnInit() {
  }

}
