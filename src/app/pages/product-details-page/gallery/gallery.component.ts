import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gallery } from '../../../types/gallery.type';
import { SourceMedia } from '../../../types/source-media.enum';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  readonly sourceMedia = SourceMedia;
  gallery = input.required<Gallery>();
  smallPictureKeys = [
    'first',
    'second',
  ] as const;
}
