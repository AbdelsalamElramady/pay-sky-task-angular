import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILoginRequest} from "../../../../shared/interfaces/login.interface";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    @Input() loading: boolean = false;
    @Output() onSubmit: EventEmitter<ILoginRequest> = new EventEmitter<ILoginRequest>();
    hidePassword: boolean = true;
    loginForm: FormGroup<{ email: FormControl<string | null>, password: FormControl<string | null>, remember: FormControl<boolean | null> }>;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group<{ email: FormControl<string | null>, password: FormControl<string | null>, remember: FormControl<boolean | null> }>({
            email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
            password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
            remember: new FormControl(true)
        });
    }

    ngOnInit(): void {
    }

    goToForget() {

    }

    onLogin() {
        if(this.loginForm.valid){
            let loginForm = this.loginForm.getRawValue();
            if(loginForm.email !== null && loginForm.password !== null && loginForm.remember !== null){
                this.onSubmit.emit(loginForm as ILoginRequest);
            }
        }
    }
}
