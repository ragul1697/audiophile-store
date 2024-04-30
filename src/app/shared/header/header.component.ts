import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener } from '@angular/core';
import { RichNavigationComponent } from '../rich-navigation/rich-navigation.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeroComponent } from '../../pages/home-page/hero/hero.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SvgMenuComponent } from '../../svg/svg-menu.component';
import { SvgLogoComponent } from '../../svg/svg-logo.component';
import { ProductCategory } from '../../types/product-category.enum';
import { PRODUCT_CATEGORY_PAGE_BASE_PATH } from '../../app.routes';

const TIMING = '300ms ease';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    SvgMenuComponent,
    SvgLogoComponent,
    ShoppingCartComponent,
    RichNavigationComponent,
    NavigationComponent,
    HeroComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('pane', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(TIMING, style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate(TIMING, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isDesktop = this.#isDesktop;
  isPaneOpen = false;
  pageHeader: string | null = null;

  constructor(
    router: Router,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') this.pageHeader = 'home';
        else if (event.url.startsWith(`/${PRODUCT_CATEGORY_PAGE_BASE_PATH}/`))
          this.pageHeader = event.url.split('/').at(-1)!;
        else this.pageHeader = null;
      }

      // Trigger change detection
      changeDetectorRef.markForCheck();

      // Close the pane
      this.isPaneOpen = false;
    });
  }

  togglePane(): void {
    this.isPaneOpen = !this.isPaneOpen;
  }

  @HostBinding('class.home-page-header')
  get isHomePageHeader(): boolean {
    return this.pageHeader === 'home';
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isDesktop = this.#isDesktop;
  }

  @HostListener('body:keydown.escape')
  closePane(): void {
    this.isPaneOpen = false;
  }

  get #isDesktop(): boolean {
    return window.innerWidth >= 1440;
  }
}
