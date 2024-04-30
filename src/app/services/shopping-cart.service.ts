import { Injectable, computed, effect, model, signal } from '@angular/core';
import { ShoppingCartItem } from '../types/shopping-cart-item.class';
import { ProductService } from './product.service';
import { ShoppingCartItemJSON } from '../types/shopping-cart-item-json.type';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  readonly ITEM_MAX_QUANTITY = 999;
  readonly STORAGE_KEY = 'cart';
  readonly #items = signal<ShoppingCartItem[]>([]);
  readonly items = this.#items.asReadonly();
  readonly size = computed(() => this.#items().length);
  readonly totalPrice = computed(() => this.#items().reduce(
    (sum, item) => sum + item.price * item.quantity(), 0
  ));

  constructor(private _productService: ProductService) {
    if (window.localStorage) {
      // Restore cart from local storage
      const cartJSON = window.localStorage.getItem(this.STORAGE_KEY);

      if (cartJSON) {
        const deserialized = JSON.parse(cartJSON) as ShoppingCartItemJSON[];

        _productService.products$.subscribe(products => {
          if (products.length)
            this.#items.set(deserialized.map(
              item => this.#createItem(item.id, item.quantity)
            ));
        });
      }

      // Keep local storage synchronized with cart
      effect(() => window.localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.#items().map(item => {
          const itemJSON: ShoppingCartItemJSON = {
            id: item.id,
            quantity: item.quantity(),
          };

          return itemJSON;
        }))
      ));
    } else {
      console.warn('Local storage not supported');
    }
  }

  get isEmpty(): boolean {
    return this.#items().length === 0;
  }

  addItem(id: string, quantity: number): void {
    this.#items.update(items => {
      const item = items.find(item => item.id === id);

      if (item)
        item.quantity.update(
          value => Math.min(value + quantity, this.ITEM_MAX_QUANTITY)
        );
      else {
        items.push(this.#createItem(id, quantity));
        this.#sortItemsByPriceDescending(items);
      }

      return [...items];
    });
  }

  empty(): void {
    this.#items.set([]);
  }

  #createItem(id: string, quantity: number): ShoppingCartItem {
    const { shortName, price } = this._productService.getProduct(id);

    return new ShoppingCartItem(
      id,
      model(quantity),
      shortName,
      price
    );
  }

  #sortItemsByPriceDescending(items: ShoppingCartItem[]): void {
    items.sort((a, b) => b.price - a.price);
  }
}
