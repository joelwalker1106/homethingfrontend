import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../mainland/models';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogService);

  protected readonly product = signal<Product | null>(null);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly activeImage = signal<string>('');
  protected readonly stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loading.set(false);
      this.error.set('找不到商品編號');
      return;
    }

    this.catalog
      .getProduct(id)
      .pipe(
        catchError(() => {
          this.error.set('無法載入商品資料，請確認後端是否啟動');
          return of(null);
        }),
      )
      .subscribe((product) => {
        this.loading.set(false);
        this.product.set(product);
        if (product) {
          this.activeImage.set(product.images?.[0] || product.image);
        } else if (!this.error()) {
          this.error.set('找不到這個商品');
        }
      });
  }

  protected selectImage(url: string): void {
    this.activeImage.set(url);
  }

  protected isStarOn(star: number, rating: number): boolean {
    return star <= Math.round(rating);
  }
}
