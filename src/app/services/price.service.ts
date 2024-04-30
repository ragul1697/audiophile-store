import { Injectable, Signal, computed } from '@angular/core';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';
import { PriceBreakdown } from '../types/price-breakdown.type';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  readonly VAT_RATE = 0.2;
  readonly SHIPPING_COST = 50;

  getPriceBreakdown(items: Signal<ShoppingCartItem[]>): PriceBreakdown {
    const subtotal = computed(() => items().reduce((acc, item) => acc + item.totalPrice, 0));
    const shipping = computed(() => this.SHIPPING_COST);
    const vat = computed(() => subtotal() * this.VAT_RATE);
    const total = computed(() => subtotal() + shipping());

    return {
      subtotal,
      shipping,
      vat,
      total,
    };
  }
}
