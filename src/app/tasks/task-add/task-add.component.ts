import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../task.model';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

@Input() Addtask: string;


  constructor() { }

  ngOnInit(): void {
  }

}
