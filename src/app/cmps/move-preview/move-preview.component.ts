import { Component, Input } from '@angular/core';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent {

  @Input() move;

  constructor() { }

  get time() {
    const time = new Date(this.move.at)
    const date = time.toLocaleDateString('en-GB')
    const hour = time.toLocaleTimeString('en-GB')
    return `${date}, ${hour}`
  }

}
