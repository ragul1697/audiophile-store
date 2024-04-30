import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Includes } from '../../../types/includes.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInfoComponent {
  readonly features = input.required<string>();
  readonly includes = input.required<Includes[]>();
}
