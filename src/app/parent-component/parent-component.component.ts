import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit, OnChanges, DoCheck {
  isChild: boolean = true;
  channelName: string = '';

  constructor() {
    console.log('Parent constuctor is called');
  }

  ngOnInit(): void {
    console.log('Parent onInit is called');
  }

  ngOnChanges(): void {
    console.log('Parent onChanges is called');
  }

  ngDoCheck(): void {
    console.log('Parent doCheck is called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
