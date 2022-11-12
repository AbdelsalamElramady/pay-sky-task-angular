import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ILoginRequest, IUser} from "../../interfaces/login.interface";
import {map, Observable, single, Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthService {

    constructor(private firebaseAuth: AngularFireAuth) {
    }

    loginWithEmail(loginForm: ILoginRequest): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            this.firebaseAuth.signInWithEmailAndPassword(loginForm.email, loginForm.password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    if (user) {
                        resolve({
                            uid: user.uid,
                            email: user.email as string,
                            displayName: user.displayName,
                            emailVerified: user.emailVerified,
                            photoURL: user.photoURL
                        });
                    } else {
                        reject('User Not Found');
                    }
                }).catch(reject);
        });
    }

    logout() {
        return this.firebaseAuth.signOut();
    }

    isAuthorized(): Observable<boolean> {
        return this.firebaseAuth.authState.pipe(map(user => !!(user && user.uid)));
    }

    getUserIdToken(): Promise<string | null> {
        let subscription: Subscription | undefined;
        return new Promise<string | null>(resolve => {
            subscription = this.firebaseAuth.idToken.subscribe(idToken => {
                resolve(idToken);
            });
        }).then((idToken) => {
            if (subscription) {
                subscription.unsubscribe();
            }
            return idToken;
        });
    }
}
