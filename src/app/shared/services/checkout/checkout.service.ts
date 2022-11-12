import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICheckoutRequest, ICheckoutResponse} from "../../interfaces/checkout.interface";
import {FirebaseAuthService} from "../auth/firebase-auth.service";
import {Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    constructor(private httpClient: HttpClient, private firebaseAuthService: FirebaseAuthService) {
    }

    checkout(checkoutRequest: ICheckoutRequest): Promise<ICheckoutResponse> {
        let subscription: Subscription | undefined;
        return new Promise<ICheckoutResponse>((resolve, reject) => {
            this.firebaseAuthService.getUserIdToken().then((idToken) => {
                if (idToken) {
                    subscription = this.httpClient.post<ICheckoutResponse>('https://localhost:7008/api/payment/pay', checkoutRequest, {
                        responseType: 'json',
                        withCredentials: true,
                        headers: {
                            'content-type': 'application/json',
                            'accept': 'application/json',
                            'authorization': `Bearer ${idToken}`
                        }
                    }).subscribe({
                        next: (response) => {
                            resolve(response);
                        },
                        error: (error) => {
                            reject(error);
                        }
                    });
                } else {
                    reject('User Not Authorized');
                }
            }).catch(reject);
        }).then((response) => {
            if (subscription) {
                subscription.unsubscribe();
            }
            return response;
        });
    }
}
