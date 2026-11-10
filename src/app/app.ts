import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { SiteFooter } from './pages/mainland/components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
