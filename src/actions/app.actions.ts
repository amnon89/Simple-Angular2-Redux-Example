/**
 * Created by amnon on 13/12/2016.
 */
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class AppActions {
    static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER = 'DECREMENT_COUNTER';

    constructor(private ngRedux: NgRedux<IAppState>) {}

    increment() {
        this.ngRedux.dispatch({ type: AppActions.INCREMENT_COUNTER });
    }

    decrement() {
        this.ngRedux.dispatch({ type: AppActions.DECREMENT_COUNTER });
    }
}