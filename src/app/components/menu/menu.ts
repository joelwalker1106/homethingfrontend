import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from './nav-links';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected readonly links = NAV_LINKS;
  protected readonly lang = signal<'zh' | 'en'>('zh');
  protected readonly menuOpen = signal(false);

  protected prevent(event: Event): void {
    event.preventDefault();
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
