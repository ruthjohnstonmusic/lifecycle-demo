import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit, OnDestroy {
  counter: number = 0;
  interval: any;

  constructor() {
    console.log('Child constuctor is called');
  }

  ngOnInit(): void {
    console.log('Child onInit is called');
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Child onDestroy is called');
    clearInterval(this.interval);
  }
}
