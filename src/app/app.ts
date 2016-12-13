import { Component } from '@angular/core';

import { Counter } from './../components/counter.component.ts';

@Component({
  selector: 'App',
  template: `
    <h2>Counter</h2>

    <Counter></Counter>
   `
})

export class App {

  constructor() {
  }
}
