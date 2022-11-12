import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from "../../shared/services/auth/firebase-auth.service";
import {ILoginRequest} from "../../shared/interfaces/login.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loading: boolean = false;

    constructor(private firebaseAuth: FirebaseAuthService, private router: Router) {
    }

    ngOnInit(): void {

    }

    onLogin(loginForm: ILoginRequest) {
        this.loading = true;
        this.firebaseAuth.loginWithEmail(loginForm).then((user) => {
            this.router.navigate(['/checkout']);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            this.loading = false;
        })
    }

}
