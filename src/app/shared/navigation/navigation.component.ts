import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategory } from '../../types/product-category.enum';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  readonly isFooter = input(false, { transform: booleanAttribute });
  readonly productCategories = Object.values(ProductCategory);
}
