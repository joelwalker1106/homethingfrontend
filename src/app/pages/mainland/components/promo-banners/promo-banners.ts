import { Component, inject, signal } from '@angular/core';
import { CatalogService } from '../../../../services/catalog.service';
import { PromoBanner } from '../../models';

@Component({
  selector: 'app-promo-banners',
  templateUrl: './promo-banners.html',
  styleUrl: './promo-banners.scss',
})
export class PromoBanners {
  private readonly catalog = inject(CatalogService);
  protected readonly promos = signal<PromoBanner[]>([]);

  constructor() {
    this.catalog.getPromos().subscribe((promos) => this.promos.set(promos));
  }
}
