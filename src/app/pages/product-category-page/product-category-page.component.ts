import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductService } from '../../services/product.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product.type';
import { AsyncPipe, NgFor } from '@angular/common';
import { RichNavigationComponent } from '../../shared/rich-navigation/rich-navigation.component';
import { AboutComponent } from '../../shared/about/about.component';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    ProductPreviewComponent,
    RichNavigationComponent,
    AboutComponent,
  ],
  templateUrl: './product-category-page.component.html',
  styleUrl: './product-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductCategoryPageComponent {
  @HostBinding('attr.role') role = 'main';
  readonly products$: Observable<Product[]>;

  constructor(productService: ProductService, route: ActivatedRoute) {
    const category = route.snapshot.paramMap.get('category');

    this.products$ = productService.products$.pipe(
      map(products => products.filter(
        product => product.category === category
      ))
    );
  }
}
