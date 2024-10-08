import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isEven: boolean;
  numbers: { num: number; isEven: boolean }[] = [];

  addNumber(event: number) {
    this.isEven = event % 2 === 0;
    this.numbers.push({ num: event, isEven: this.isEven });
  }
  // serverElements = [
  //   { type: 'server', name: 'testServer', content: 'This is just a test!' },
  // ];
  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }
  // onBlueprintAdded(blueprintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent,
  //   });
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'changed!';
  // }
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }
}
