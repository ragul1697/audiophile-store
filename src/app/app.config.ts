import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IMAGE_LOADER, TitleCasePipe, provideImageKitLoader } from '@angular/common';
import { imageKitLoader } from './imagekit.config';
import { RouteReuseStrategyService } from './services/route-reuse-strategy.service';
import { TitleStrategyService } from './services/title-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
    // provideImageKitLoader('https://ik.imagekit.io/jgerard/fem-audiophile-e-commerce-website'),
    {
      provide: IMAGE_LOADER,
      useValue: imageKitLoader,
    },
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseStrategyService,
    },
    TitleCasePipe,
  ]
};
