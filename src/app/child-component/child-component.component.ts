import {
  Component,
  OnDestroy,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter: number = 0;
  interval: any;

  @Input() channelName: string = '';

  @ContentChild('projectedContent') projectedContent: any;

  constructor() {
    console.log('Child constuctor is called');
  }

  ngOnInit(): void {
    console.log('Child onInit is called');
    console.log('OnInit - ' + this.projectedContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Child onDestroy is called');
    // clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child onChanges is called');
    console.log(changes);
    console.log('OnChanges - ' + this.projectedContent);
  }

  ngDoCheck(): void {
    console.log('Child doCheck is called');
    console.log('DoCheck - ' + this.projectedContent);
  }

  ngAfterContentInit(): void {
    console.log('Child afterContentInit is called');
    console.log('AfterContentInit - ' + this.projectedContent);
  }

  ngAfterContentChecked(): void {
    console.log('Child afterContentChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('Child afterViewInit is called');
  }

  ngAfterViewChecked(): void {
    console.log('Child afterViewChecked is called');
  }
}
