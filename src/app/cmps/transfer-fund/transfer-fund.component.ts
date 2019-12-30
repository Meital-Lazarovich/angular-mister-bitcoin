import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {

  @Input() contact;
  amount: number;

  @Output('addMove') moveEmitter = new EventEmitter();

  constructor() { }

  addMove() {
    this.moveEmitter.emit(this.amount);
  }

}
