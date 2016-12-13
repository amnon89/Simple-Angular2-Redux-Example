/**
 * Created by amnon on 13/12/2016.
 */

import {
    ICounter,
    ICounterRecord
} from "./counter.types";
import { makeTypedFactory } from 'typed-immutable-record';

export const counterFactory = makeTypedFactory<ICounter, ICounterRecord>({
    counter: 0,
});

export const INITIAL_STATE = counterFactory();