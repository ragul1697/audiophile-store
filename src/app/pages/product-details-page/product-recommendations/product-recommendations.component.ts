import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OtherProduct } from '../../../types/other-product.type';
import { NgFor } from '@angular/common';
import { SourceMedia } from '../../../types/source-media.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-recommendations',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './product-recommendations.component.html',
  styleUrl: './product-recommendations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductRecommendationsComponent {
  readonly sourceMedia = SourceMedia;
  readonly recommendedProducts = input.required<OtherProduct[]>();
}
