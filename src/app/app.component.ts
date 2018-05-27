import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pageNumber: number;
  public title = 'app';
  constructor() {
    this.pageNumber = 1;
  }
  Increment() {
    this.pageNumber++;
  }

  Decrement() {
    this.pageNumber--;
  }

  ngOnInit(): void {
  }

}
