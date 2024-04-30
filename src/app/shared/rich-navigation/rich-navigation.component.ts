import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategory } from '../../types/product-category.enum';

@Component({
  selector: 'app-rich-navigation',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
  ],
  templateUrl: './rich-navigation.component.html',
  styleUrl: './rich-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichNavigationComponent {
  readonly productCategories = Object.values(ProductCategory);
}
