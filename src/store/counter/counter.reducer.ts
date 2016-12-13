/**
 * Created by amnon on 13/12/2016.
 */
import { Action } from 'redux';
import {ICounterRecord} from "./counter.types";
import {INITIAL_STATE} from "./counter.initial-state";
import {AppActions} from "../../actions/app.actions";

export function counterReducer(
    state: ICounterRecord = INITIAL_STATE,
    action: Action): ICounterRecord {

    switch (action.type) {

        case AppActions.INCREMENT_COUNTER:
            return state.update('counter', (value) => value + 1);

        case AppActions.DECREMENT_COUNTER:
            return state.update('counter', (value) => value - 1);

        default:
            return state;
    }
}
