import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {FirebaseAuthService} from "../../shared/services/auth/firebase-auth.service";
import {PERSISTENCE} from "@angular/fire/compat/auth";


@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    providers: [
        FirebaseAuthService,
        { provide: PERSISTENCE, useValue: 'local' },
    ]
})
export class LoginModule {
}
