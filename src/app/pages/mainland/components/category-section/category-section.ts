import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../../../services/catalog.service';
import { CategoryItem } from '../../models';

@Component({
  selector: 'app-category-section',
  imports: [RouterLink],
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
