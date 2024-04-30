import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductCategory } from '../types/product-category.enum';

const productCategories = Object.values(ProductCategory) as string[];

export const productCategoryPageGuard: CanActivateFn = (route, _state) => {
  const category = route.paramMap.get('category');

  if (category === null)
    throw Error('Category route parameter not found');

  if (productCategories.includes(category)) return true;

  // Redirect to home page
  return inject(Router).parseUrl('');
};
