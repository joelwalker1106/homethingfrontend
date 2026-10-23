import { Component, computed, inject, signal } from '@angular/core';
import { CatalogService } from '../../../../services/catalog.service';
import { Product, ProductTab } from '../../models';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-popular-picks',
  imports: [ProductCard],
  templateUrl: './popular-picks.html',
  styleUrl: './popular-picks.scss',
})
export class PopularPicks {
  private readonly catalog = inject(CatalogService);
  protected readonly tabs: { id: ProductTab; label: string }[] = [
    { id: 'hot', label: '熱銷推薦' },
    { id: 'new', label: '最新上架' },
    { id: 'sale', label: '優惠商品' },
  ];
  protected readonly selected = signal<ProductTab>('hot');
  private readonly allProducts = signal<Product[]>([]);
  protected readonly products = computed(() =>
    this.allProducts()
      .filter((product) => product.tabs.includes(this.selected()))
      .slice(0, 5),
  );

  constructor() {
    this.catalog.getProducts().subscribe((products) => this.allProducts.set(products));
  }
}
