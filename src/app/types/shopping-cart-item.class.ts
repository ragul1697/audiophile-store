import { ModelSignal, model } from "@angular/core";

export class ShoppingCartItem {
  readonly imageSrc = `/assets/images/cart/${this.id}.jpg`;

  constructor(
    readonly id: string,
    public quantity: ModelSignal<number>,
    readonly shortName: string,
    readonly price: number,
  ) { }

  clone(): ShoppingCartItem {
    return new ShoppingCartItem(
      this.id,
      model(this.quantity()),
      this.shortName,
      this.price,
    );
  }

  get totalPrice(): number {
    return this.price * this.quantity();
  }
}
