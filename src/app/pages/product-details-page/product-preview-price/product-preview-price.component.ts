import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { Product } from '../../../types/product.type';
import { SourceMedia } from '../../../types/source-media.enum';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuantityControlComponent } from '../../../shared/quantity-control/quantity-control.component';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { AppCurrencyPipe } from '../../../app-currency.pipe';

@Component({
  selector: 'app-product-preview-price',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    AppCurrencyPipe,
    QuantityControlComponent,
  ],
  templateUrl: './product-preview-price.component.html',
  styleUrl: './product-preview-price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPreviewPriceComponent {
  readonly sourceMedia = SourceMedia;
  readonly product = input.required<Product>();
  productQuantity = model(1);

  constructor(private _cart: ShoppingCartService) { }

  addToCart(): void {
    this._cart.addItem(this.product().id, this.productQuantity());
  }
}
