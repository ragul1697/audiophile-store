import { ChangeDetectionStrategy, Component, HostBinding, HostListener, forwardRef, model } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-quantity-control',
  standalone: true,
  imports: [
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityControlComponent),
      multi: true,
    },
  ],
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuantityControlComponent implements ControlValueAccessor {
  @HostBinding('attr.aria-valuemin') readonly MIN = 1;
  @HostBinding('attr.aria-valuemax') readonly MAX = this._cart.ITEM_MAX_QUANTITY;
  readonly quantity = model(this.MIN);
  onChange = (_quantity: number) => { };
  onTouched = () => { };
  @HostBinding('attr.tabindex') readonly TAB_INDEX = 0;
  @HostBinding('attr.aria-label') readonly ARIA_LABEL = 'Quantity';
  @HostBinding('attr.role') readonly ROLE = 'spinbutton';

  constructor(private readonly _cart: ShoppingCartService) { }

  @HostBinding('attr.aria-valuenow')
  get currentValue(): number {
    return this.quantity();
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  @HostListener('keydown.ArrowDown', ['$event'])
  onArrowDown(event: KeyboardEvent): void {
    event.preventDefault();
    this.onDecrement();
  }

  @HostListener('keydown.ArrowUp', ['$event'])
  onArrowUp(event: KeyboardEvent): void {
    event.preventDefault();
    this.onIncrement();
  }

  @HostListener('keydown.PageDown', ['$event'])
  onPageDown(event: KeyboardEvent): void {
    event.preventDefault();
    this.quantity.update(value => Math.max(value - 10, this.MIN));
    this.onChange(this.quantity());
  }

  @HostListener('keydown.PageUp', ['$event'])
  onPageUp(event: KeyboardEvent): void {
    event.preventDefault();
    this.quantity.update(value => Math.min(value + 10, this.MAX));
    this.onChange(this.quantity());
  }

  @HostListener('keydown.Home', ['$event'])
  onHome(event: KeyboardEvent): void {
    event.preventDefault();
    this.quantity.set(this.MIN);
    this.onChange(this.quantity());
  }

  @HostListener('keydown.End', ['$event'])
  onEnd(event: KeyboardEvent): void {
    event.preventDefault();
    this.quantity.set(this.MAX);
    this.onChange(this.quantity());
  }

  onDecrement(): void {
    this.quantity.update(value => Math.max(value - 1, this.MIN));
    this.onChange(this.quantity());
  }

  onIncrement(): void {
    this.quantity.update(value => Math.min(value + 1, this.MAX));
    this.onChange(this.quantity());
  }

  writeValue(quantity: number): void {
    this.quantity.set(quantity);
  }

  registerOnChange(fn: (quantity: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
