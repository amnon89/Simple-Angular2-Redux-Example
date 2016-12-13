/**
 * Created by amnon on 13/12/2016.
 */
import * as counter from './counter'



export interface IAppState {
    counter?: counter.ICounter;
};

export const rootReducer = counter.counterReducer;
// Could be combined like so
//export const rootReducer = combineReducers<IAppState>({
//    counter: counter.counterReducer,
//    session: session.sessionReducer,
//    router: routerReducer,
//});