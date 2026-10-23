import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { CATEGORIES, PRODUCTS, PROMOS } from '../pages/mainland/data';
import { CategoryItem, Product, PromoBanner } from '../pages/mainland/models';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly http = inject(HttpClient);

  getCategories() {
    return this.http
      .get<CategoryItem[]>('/api/categories')
      .pipe(catchError(() => of(CATEGORIES)));
  }

  getProducts() {
    return this.http.get<Product[]>('/api/products').pipe(catchError(() => of(PRODUCTS)));
  }

  getProduct(id: string) {
    return this.http.get<Product>(`/api/products/${id}`);
  }

  getPromos() {
    return this.http.get<PromoBanner[]>('/api/promos').pipe(catchError(() => of(PROMOS)));
  }
}
