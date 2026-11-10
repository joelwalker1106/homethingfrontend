import { Routes } from '@angular/router';
import { Mainland } from './pages/mainland/mainland';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Mainland },
  { path: 'products/:id', component: ProductDetail },
];
