/**
 * Created by amnon on 13/12/2016.
 */
import { TypedRecord } from 'typed-immutable-record';

export interface ICounter {
    counter: number;
}

export interface ICounterRecord extends TypedRecord<ICounterRecord>,
    ICounter {
};