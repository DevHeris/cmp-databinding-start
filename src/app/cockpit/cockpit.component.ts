import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddServer(serverName: string) {
    this.serverCreated.emit({
      serverName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
  onAddBlueprint(serverName: string) {
    this.blueprintCreated.emit({
      serverName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
