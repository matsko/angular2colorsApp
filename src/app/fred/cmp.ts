import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

import {ColorCmp} from '../color/cmp';
import {ColorFormCmp} from '../color-form/cmp';

@Component({
  selector: 'fred-app',
  directives: [ColorCmp, ColorFormCmp],
  templateUrl: 'app/fred/template.html'
})
export class FredApp {
  colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange"
  ];

  title = "these are my colours";

  addNewColor(value) {
    this.colors.push(value);
  }
}
