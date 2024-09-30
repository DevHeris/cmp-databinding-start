import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // to let the styles for this particular component be applied globally to all the app components
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { name: string; content: string; type: string };

  @Input() name: string;

  @ViewChild('headingDiv', { static: true }) heading: ElementRef;
  @ContentChild('projectedParagraph', { static: true })
  paragraphFromParent: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'ngOnChanges was called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck was called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit has been called!');
    console.log(this.paragraphFromParent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked has been called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit has been called!');
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked has been called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy has been called!');
  }
}
