/**
 * Created by amnon on 04/12/2016.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'Button',
    template: `
    <button
      [id]="qaid"
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{className}}">

      <ng-content></ng-content>
    </button>
  `
})
export class Button {
    @Input() className: string;
    @Input() type: string;
    @Input() qaid: string;
    @Output() onClick = new EventEmitter<any>();

    handleClick(event: any) {
        this.onClick.emit(event);
    }
};