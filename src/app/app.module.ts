/**
 * Created by amnon on 13/12/2016.
 */
// Angular
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

// Redux
import { NgReduxModule }    from 'ng2-redux';

// App
import { App }              from './app'
import * as AppComponents from "../components";



@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule.forRoot()
    ],
    declarations: [
        App,
        AppComponents.Counter,

    ],
    bootstrap: [
        App
    ]
})
export class AppModule {}