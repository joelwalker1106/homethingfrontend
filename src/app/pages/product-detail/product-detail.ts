import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../mainland/models';

type DetailTab = 'intro' | 'specs' | 'usage' | 'faq';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogService);

  protected readonly product = signal<Product | null>(null);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly activeImage = signal('');
  protected readonly activeTab = signal<DetailTab>('intro');
  protected readonly categoryId = signal('health-monitoring');

  protected readonly galleryImages = computed(() => {
    const item = this.product();
    if (!item) {
      return [] as string[];
    }
    const images = item.images?.length ? item.images : [item.image];
    return images.slice(0, 4);
  });

  protected readonly featureCards = computed(() => {
    const cards = this.product()?.featureCards ?? [];
    if (cards.length) {
      return cards;
    }
    return [
      { iconKey: 'home', title: '居家量測', description: '方便在家規律使用' },
      { iconKey: 'easy', title: '操作直覺', description: '介面簡單，容易上手' },
      { iconKey: 'consult', title: '專人諮詢', description: '提供選購與使用建議' },
      { iconKey: 'support', title: '安心售後', description: '完善服務與支援' },
    ];
  });

  ngOnInit(): void {
    this.categoryId.set(this.route.snapshot.paramMap.get('categoryId') || 'health-monitoring');
    const id = this.route.snapshot.paramMap.get('productId');
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
          if (product.category) {
            this.categoryId.set(product.category);
          }
        } else if (!this.error()) {
          this.error.set('找不到這個商品');
        }
      });
  }

  protected selectImage(url: string): void {
    this.activeImage.set(url);
  }

  protected setTab(tab: DetailTab): void {
    this.activeTab.set(tab);
  }
}
