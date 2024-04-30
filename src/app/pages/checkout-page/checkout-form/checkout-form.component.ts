import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
import { SvgCashOnDeliveryComponent } from '../../../svg/svg-cash-on-delivery.component';
import { CheckoutFormControls } from './checkout-form-controls.type';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule,
    SvgCashOnDeliveryComponent,
    OrderConfirmationComponent,
  ],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFormComponent {
  readonly E_MONEY = 'e-money';
  readonly CASH_ON_DELIVERY = 'cash-on-delivery';
  readonly PIN_REGEX = '[0-9]{4}';
  readonly ngForm = viewChild.required(FormGroupDirective);
  readonly checkoutForm = this._formBuilder.group<CheckoutFormControls>({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    phone: '',
    address: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    paymentMethod: ['', Validators.required],
  });
  isOrderConfirmed = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _cart: ShoppingCartService,
    private readonly _orderService: OrderService,
  ) { }

  onSubmit(): void {
    if (this.checkoutForm.invalid) return;
    this._orderService.createOrder();
    this._cart.empty();

    // Open the order confirmation dialog
    this.isOrderConfirmed = true;
  }

  addEMoneyControls(): void {
    this.checkoutForm.addControl('eMoneyNumber', new FormControl('', Validators.required));
    this.checkoutForm.addControl('eMoneyPin', new FormControl('', [
      Validators.required,
      Validators.pattern(this.PIN_REGEX),
    ]));
  }

  removeEMoneyControls(): void {
    this.checkoutForm.removeControl('eMoneyNumber');
    this.checkoutForm.removeControl('eMoneyPin');
  }

  isRequired(control: FormControl): boolean {
    return this.#isErrorDisplayed('required', control);
  }

  get isEmailInvalid(): boolean {
    return this.#isErrorDisplayed('email', this.checkoutForm.controls.email);
  }

  get isPinInvalid(): boolean {
    return this.#isErrorDisplayed('pattern', this.checkoutForm.controls.eMoneyPin!);
  }

  #isErrorDisplayed(errorName: string, control: FormControl): boolean {
    return control.hasError(errorName) &&
      (control.touched || this.ngForm().submitted);
  }
}
