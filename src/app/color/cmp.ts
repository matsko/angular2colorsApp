import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
  selector: 'color',
  template: `
    <span [style.color]="value">{{ value }}</span>
  `
})
export class ColorCmp {
  @Input() value = "";
}
