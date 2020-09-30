import { Component, OnInit } from '@angular/core';

import {Event} from "../../event.model";
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {


  // title:string="Test title";
  // image:string="https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/";

  currentEvent = new Event("test" , "30.09.2020","desc","https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/");
  constructor() { }

  ngOnInit() {
  }

}
