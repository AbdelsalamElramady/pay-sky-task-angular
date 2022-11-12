import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICheckoutRequest} from "../../../../shared/interfaces/checkout.interface";

@Component({
    selector: 'app-checkout-form',
    templateUrl: './checkout-form.component.html',
    styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

    @Input() loading: boolean = false;
    @Output() onSubmit: EventEmitter<ICheckoutRequest> = new EventEmitter<ICheckoutRequest>();
    checkoutForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.checkoutForm = fb.group({
            processingCode: new FormControl('', Validators.compose([Validators.required])),
            systemTraceNr: new FormControl('', Validators.compose([Validators.required])),
            functionCode: new FormControl('', Validators.compose([Validators.required])),
            cardNo: new FormControl('', Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])),
            cardHolder: new FormControl('', Validators.compose([Validators.required])),
            amountTrxn: new FormControl('', Validators.compose([Validators.required])),
            currencyCode: new FormControl('', Validators.compose([Validators.required]))
        });
    }

    ngOnInit(): void {
    }

    onCheckout() {
        if(this.checkoutForm.valid){
            this.onSubmit.emit(this.checkoutForm.getRawValue())
        }
    }
}
