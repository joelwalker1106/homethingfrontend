import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { CatalogService } from '../../services/catalog.service';
import { CategoryItem, Product } from '../mainland/models';
import { ProductCard } from '../mainland/components/product-card/product-card';

@Component({
  selector: 'app-category-products',
  imports: [ProductCard],
  templateUrl: './category-products.html',
  styleUrl: './category-products.scss',
})
export class CategoryProducts implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogService);

  protected readonly category = signal<CategoryItem | null>(null);
  protected readonly products = signal<Product[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const categoryId = params.get('categoryId');
          if (!categoryId) {
            this.error.set('找不到分類');
            this.loading.set(false);
            return of(null);
          }

          this.loading.set(true);
          this.error.set(null);

          return this.catalog.getCategory(categoryId).pipe(
            switchMap((category) => {
              if (!category) {
                this.error.set('找不到這個分類');
                this.loading.set(false);
                return of(null);
              }

              this.category.set(category);
              return this.catalog.getProductsByCategory(category.id).pipe(
                catchError(() => {
                  this.error.set('無法載入商品列表');
                  return of([] as Product[]);
                }),
              );
            }),
            catchError(() => {
              this.error.set('無法載入分類資料');
              return of(null);
            }),
          );
        }),
      )
      .subscribe((products) => {
        this.loading.set(false);
        if (products) {
          this.products.set(products);
        }
      });
  }
}
