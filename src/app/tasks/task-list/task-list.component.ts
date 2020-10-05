import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  Tasks: Task [] = [
    new Task('First task'),
    new Task('Second task'),
    new Task('Third task')

    ];
  constructor() { }

  ngOnInit(): void {
  }

}
