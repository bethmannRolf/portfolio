import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { ScrollService } from "../../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../core/menu.service';

/**
 * A standalone header component that includes navigation controls
 * and a language switcher. Handles scrolling and responsive menu toggling.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /**
   * Creates an instance of HeaderComponent.
   *
   * @param scrollService Service used to scroll to specific page sections.
   * @param menuService Service used to toggle the responsive navigation menu.
   */
  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService
  ) { }

  /**
   * Scrolls smoothly to the section with the given ID.
   *
   * @param sectionId The ID of the section to scroll to.
   */
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  /**
   * Toggles the visibility of the navigation menu.
   * Prevents event propagation to avoid unintended menu closing via outside click detection.
   *
   * @param event The click event that triggered the toggle.
   */
  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.menuService.toggleMenu();
  }
}
