import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  protected readonly stars = [1, 2, 3, 4, 5];

  protected money(value: number): string {
    return `NT$${value.toLocaleString('en-US')}`;
  }

  protected isStarOn(star: number): boolean {
    return star <= Math.round(this.product().rating);
  }
}
