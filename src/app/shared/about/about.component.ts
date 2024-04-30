import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NgOptimizedImage, NgSwitch, NgSwitchCase } from '@angular/common';
import { ImageSources } from '../../types/image-sources.type';
import { Viewport } from '../../types/viewport.type';
import { Breakpoints } from '../../types/breakpoints.enum';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgOptimizedImage,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly imageSources: ImageSources;
  viewport = this.#viewport;

  constructor() {
    const IMG_BASE_SRC = 'best-gear.png?tr=e-grayscale,cm-extract';
    const getImgSrc = (width: number, height: number, x: number, y: number) =>
      `${IMG_BASE_SRC},w-${width},h-${height},x-${x},y-${y}`;

    this.imageSources = {
      desktop: getImgSrc(640.51, 697.45, 243.16, 92.52),
      tablet: getImgSrc(1169.32, 509.14, 46.67, 140.86),
      mobile: getImgSrc(554.96, 509.14, 337.73, 140.86),
    };
  }

  get #viewport(): Viewport {
    if (window.innerWidth < Breakpoints.TABLET)
      return 'mobile';
    else if (window.innerWidth < Breakpoints.DESKTOP)
      return 'tablet';
    else
      return 'desktop';
  }

  @HostListener('window:resize')
  onResize(): void {
    this.viewport = this.#viewport;
  }
}
