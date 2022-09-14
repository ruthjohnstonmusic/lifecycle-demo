import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {
  child: boolean = false;

  constructor() {
    console.log('Parent constuctor is called');
  }

  ngOnInit(): void {
    console.log('Parent onInit is called');
  }

  toggleChild() {
    this.child = !this.child;
  }
}
