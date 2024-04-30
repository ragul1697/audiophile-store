import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

export const checkoutPageGuard: CanActivateFn = (_route, _state) => {
  if (inject(ShoppingCartService).isEmpty)
    // Redirect to home page
    return inject(Router).parseUrl('');
  return true;
};
