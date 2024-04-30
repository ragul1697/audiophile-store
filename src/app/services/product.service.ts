import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly #products$ = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.#products$.asObservable();

  constructor(private _http: HttpClient) {
    this._http.get<Product[]>('/assets/products.json')
      .subscribe(products => this.#products$.next(products));
  }

  getProduct(id: string): Product {
    const product = this.#products$.value.find(product => product.id === id);

    if (product) return product;
    throw Error(`Product #${id} not found`);
  }

  getProduct$(id: string): Observable<Product> {
    return this.products$.pipe(
      map(products => products.find(product => product.id === id)),
      filter((product: Product | undefined): product is Product => product !== undefined),
    );
  }
}
