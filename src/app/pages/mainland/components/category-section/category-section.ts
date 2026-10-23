import { Component, inject, signal } from '@angular/core';
import { CatalogService } from '../../../../services/catalog.service';
import { CategoryItem } from '../../models';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
})
export class CategorySection {
  private readonly catalog = inject(CatalogService);
  protected readonly categories = signal<CategoryItem[]>([]);

  constructor() {
    this.catalog.getCategories().subscribe((categories) => this.categories.set(categories));
  }
}
