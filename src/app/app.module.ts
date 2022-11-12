import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './modules/login/login.module';
import {CheckoutModule} from './modules/checkout/checkout.module';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        SharedModule,
        LoginModule,
        CheckoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
