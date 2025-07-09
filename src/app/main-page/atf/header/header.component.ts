import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../../language-switcher/language-switcher.component';
import { ScrollService } from "../../../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../core/menu.service'; // <--- Hinzugefügt

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService
  ) { }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollTo(sectionId);

  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuService.toggleMenu();
  }
}
