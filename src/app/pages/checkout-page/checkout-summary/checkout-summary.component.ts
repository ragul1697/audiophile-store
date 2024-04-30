import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppCurrencyPipe } from '../../../app-currency.pipe';
import { OrderService } from '../../../services/order.service';
import { PriceService } from '../../../services/price.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [
    NgFor,
    AppCurrencyPipe,
  ],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutSummaryComponent {
  readonly items = this._cart.items;
  readonly priceBreakdown = this._price.getPriceBreakdown(this.items);
  readonly costEntries = [
    { label: 'Total', value: this.priceBreakdown.subtotal },
    { label: 'Shipping', value: this.priceBreakdown.shipping },
    { label: 'VAT (included)', value: this.priceBreakdown.vat },
  ];

  constructor(
    private readonly _cart: ShoppingCartService,
    private readonly _price: PriceService,
  ) { }
}
