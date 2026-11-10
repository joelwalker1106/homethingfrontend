import { Routes } from '@angular/router';
import { CategoryProducts } from './pages/category-products/category-products';
import { Mainland } from './pages/mainland/mainland';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Mainland },
  { path: 'products/:categoryId', component: CategoryProducts },
  { path: 'products/:categoryId/:productId', component: ProductDetail },
];
