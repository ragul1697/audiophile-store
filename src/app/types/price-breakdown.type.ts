import { Signal } from "@angular/core";

export type PriceBreakdown = {
  readonly subtotal: Signal<number>;
  readonly shipping: Signal<number>;
  readonly vat: Signal<number>;
  readonly total: Signal<number>;
};
