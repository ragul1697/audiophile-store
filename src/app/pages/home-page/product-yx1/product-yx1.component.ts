import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PictureService } from '../../../services/picture.service';
import { SourceMedia } from '../../../types/source-media.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-yx1',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './product-yx1.component.html',
  styleUrl: './product-yx1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductYX1Component {
  readonly sourceMedia = SourceMedia;
  picture = inject(PictureService).getSources('home', 'earphones-yx1.jpg');
}
