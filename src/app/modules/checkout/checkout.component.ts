import {Component, OnInit} from '@angular/core';
import {ICheckoutRequest} from "../../shared/interfaces/checkout.interface";
import {CheckoutService} from "../../shared/services/checkout/checkout.service";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    loading: boolean = false;

    constructor(private checkoutService: CheckoutService) {
    }

    ngOnInit(): void {
    }

    onCheckoutSubmit($event: ICheckoutRequest) {
        this.loading = true;
        this.checkoutService.checkout($event).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            this.loading = false;
        });
    }
}
