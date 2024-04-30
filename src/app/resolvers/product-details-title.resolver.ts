import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';

export const productDetailsTitleResolver: ResolveFn<string> = (route, _state) => {
  const productId = route.paramMap.get('id');

  if (productId === null)
    throw Error('Route parameter "id" not found');

  return inject(ProductService).getProduct$(productId).pipe(
    map(product => product.name),
  );
};
