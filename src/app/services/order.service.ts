import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  #items: ShoppingCartItem[] = [];
  #total = 0;

  constructor(
    private readonly _cart: ShoppingCartService,
  ) { }

  get items(): readonly ShoppingCartItem[] {
    return this.#items;
  }

  get total(): number {
    return this.#total;
  }

  createOrder(): void {
    this.#items = this._cart.items().map(item => item.clone());
    this.#total = this.#items.reduce((acc, item) => acc + item.totalPrice, 0);
  }
}
