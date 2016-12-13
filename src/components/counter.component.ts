/**
 * Created by amnon on 04/12/2016.
 */

import { Component } from '@angular/core';
import { Button } from './button.component.ts';

@Component({
    selector: 'Counter',
    template: `
        <Button (onClick)="decrement()">-</Button>
        <label>{{count}}</label>
        <Button (onClick)="increment()">+</Button>
   `
})

export class Counter {

    private count: number;

    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}