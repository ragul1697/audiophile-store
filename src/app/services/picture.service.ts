import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  getSources(folder: string, image: string): Sources {
    const sources: { [key: string]: string } = {};

    for (const device of ['mobile', 'tablet', 'desktop']) {
      sources[device] = this.#getSrc(folder, device, image);
    }

    return sources as Sources;
  }

  #getSrc(folder: string, device: string, image: string): string {
    return [
      '/assets/images',
      folder,
      device,
      image
    ].join('/');
  }
}

type Sources = {
  mobile: string;
  tablet: string;
  desktop: string;
};
