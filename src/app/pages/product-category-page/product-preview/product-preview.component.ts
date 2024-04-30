import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SourceMedia } from '../../../types/source-media.enum';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
  ],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPreviewComponent {
  readonly sourceMedia = SourceMedia;
  isNew = input.required<boolean>();
  id = input.required<string>();
  name = input.required<string>();
  description = input.required<string>();
  categoryImage = input.required<{
    mobile: string;
    tablet: string;
    desktop: string;
  }>();
}
