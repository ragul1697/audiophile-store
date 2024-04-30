import { ImageLoaderConfig } from "@angular/common";

const REPO_NAME = 'fem-audiophile-e-commerce-website';
const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/jgerard/' + REPO_NAME;

export const imageKitLoader = (config: ImageLoaderConfig): string =>
  `${IMAGEKIT_ENDPOINT}/${config.src}${config.width ? `:w-${config.width}` : ''}`;
