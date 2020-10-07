import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  MyId: number;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.MyId = params.id;
     // this.MyId = params['id'];
    });
  }

}
