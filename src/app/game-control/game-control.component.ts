import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() eventToBeEmitted = new EventEmitter();
  count: number = 1;
  refId: any;

  startGame() {
    this.refId = setInterval(() => {
      this.eventToBeEmitted.emit(this.count);
      this.count++;
    }, 1000);
  }

  endGame(): void {
    clearInterval(this.refId);
  }
}
