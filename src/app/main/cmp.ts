import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

import {ColorCmp} from '../color/cmp';
import {ColorFormCmp} from '../color-form/cmp';

@Component({
  selector: 'main-app',
  directives: [ColorCmp, ColorFormCmp],
  templateUrl: 'app/main/template.html'
})
export class MainApp {
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
