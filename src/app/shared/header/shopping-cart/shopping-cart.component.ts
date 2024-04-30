import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NgFor, NgIf } from '@angular/common';
import { QuantityControlComponent } from '../../quantity-control/quantity-control.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCurrencyPipe } from '../../../app-currency.pipe';
import { SvgShoppingCartComponent } from '../../../svg/svg-shopping-cart.component';
import { trigger, transition, style, animate } from '@angular/animations';

const ENTER_TIMING = '200ms ease-in';
const LEAVE_TIMING = '200ms ease-out';
const OPACITY = 0;
const SCALE = 0.8;

@Component({
  animations: [
    trigger('dialog', [
      transition(':enter', [
        style({ scale: SCALE, opacity: OPACITY }),
        animate(ENTER_TIMING, style({ scale: 1, opacity: 1 }))
      ]),
      transition(':leave', [
        animate(LEAVE_TIMING, style({ scale: SCALE, opacity: OPACITY }))
      ]),
    ]),
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: OPACITY }),
        animate(ENTER_TIMING, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(LEAVE_TIMING, style({ opacity: OPACITY }))
      ]),
    ]),
  ],
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    AppCurrencyPipe,
    QuantityControlComponent,
    SvgShoppingCartComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  isDialogOpen = false;
  readonly items = this._cart.items;
  readonly size = this._cart.size;
  readonly totalPrice = this._cart.totalPrice;

  constructor(
    private readonly _cart: ShoppingCartService,
    private readonly _router: Router,
  ) { }

  get isCartEmpty(): boolean {
    return this._cart.isEmpty;
  }

  emptyCart(): void {
    this._cart.empty();
  }

  checkOut(): void {
    this.isDialogOpen = false;
    this._router.navigateByUrl('/checkout');
  }
}
