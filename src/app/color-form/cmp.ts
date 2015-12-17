import {EventEmitter, Component} from 'angular2/core';
import {Output} from 'angular2/core';

@Component({
  selector: 'color-form',
  template: `
    <form (submit)="submit(inputValue); inputValue=''">
      <label>Enter a color:</label>
      <input type="text" [(ngModel)]="inputValue" />
      <button>Submit</button>
    </form>
  `
})
export class ColorFormCmp {

  @Output() ready = new EventEmitter();

  submit(value) {
    this.ready.next(value);
  }
}
