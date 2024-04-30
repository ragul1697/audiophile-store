import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';
import { PRODUCT_CATEGORY_PAGE_PATH } from '../app.routes';

@Injectable({
  providedIn: 'root'
})
export class RouteReuseStrategyService extends BaseRouteReuseStrategy {
  override shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    if (future.routeConfig?.path === PRODUCT_CATEGORY_PAGE_PATH) return false;

    // Angular default behavior
    // Source: https://github.com/angular/angular/blob/17.3.0/packages/router/src/route_reuse_strategy.ts#L104-L111
    return future.routeConfig === curr.routeConfig;
  }
}
