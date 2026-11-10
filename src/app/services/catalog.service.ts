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

  getCategory(id: string) {
    return this.http.get<CategoryItem | null>(`/api/categories/${id}`).pipe(
      catchError(() => of(CATEGORIES.find((category) => category.id === id) ?? null)),
    );
  }

  getProducts() {
    return this.http.get<Product[]>('/api/products').pipe(catchError(() => of(PRODUCTS)));
  }

  getProductsByCategory(categoryId: string) {
    return this.http
      .get<Product[]>('/api/products', { params: { category: categoryId } })
      .pipe(
        catchError(() =>
          of(PRODUCTS.filter((product) => product.category === categoryId)),
        ),
      );
  }

  getProduct(id: string) {
    return this.http.get<Product | null>(`/api/products/${id}`).pipe(
      catchError(() => of(PRODUCTS.find((product) => product.id === id) ?? null)),
    );
  }

  getPromos() {
    return this.http.get<PromoBanner[]>('/api/promos').pipe(catchError(() => of(PROMOS)));
  }
}
