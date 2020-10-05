import { Component, OnInit } from '@angular/core';
import {Event} from '../event.model';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  Events: Event [] = [

    new Event ('Js event1', '01.10.2020', 'desc1', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 0),
  new Event ('Js even2', '03.10.2020', 'desc2', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 1 ),
  new Event ('Js event3', '02.10.2020', 'desc3', 'https://steamuserimages-a.akamaihd.net/ugc/507028195037290139/951D18EDFCD896B724B7DD119C8C6E71DB316183/', 2 )
  ];

  HideEvents: Event [];

  hideEvent()
  {

    this.HideEvents.push(this.Events.find(x=>{
      x.isVisible==false;
    }));
    console.log(this.Events);
  }


  constructor() { }

  ngOnInit() {

  }

}
