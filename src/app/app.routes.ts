import { Routes } from '@angular/router';
import { productDetailsTitleResolver } from './resolvers/product-details-title.resolver';
import { productCategoryPageGuard } from './guards/product-category-page.guard';
import { productCategoryPageTitleResolver } from './resolvers/product-category-page-title.resolver';
import { checkoutPageGuard } from './guards/checkout-page.guard';

export const PRODUCT_CATEGORY_PAGE_BASE_PATH = 'product-category';
export const PRODUCT_CATEGORY_PAGE_PATH = `${PRODUCT_CATEGORY_PAGE_BASE_PATH}/:category`;

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home',
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: PRODUCT_CATEGORY_PAGE_PATH,
    title: productCategoryPageTitleResolver,
    loadComponent: () => import('./pages/product-category-page/product-category-page.component'),
    canActivate: [productCategoryPageGuard],
  },
  {
    path: 'product/:id',
    title: productDetailsTitleResolver,
    loadComponent: () => import('./pages/product-details-page/product-details-page.component'),
  },
  {
    path: 'checkout',
    title: 'Checkout',
    loadComponent: () => import('./pages/checkout-page/checkout-page.component'),
    canActivate: [checkoutPageGuard],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
