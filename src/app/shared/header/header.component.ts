import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { ScrollService } from "../../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../core/menu.service';
import { Router } from '@angular/router';

/**
 * A standalone header component that includes navigation controls
 * and a language switcher. Handles scrolling and responsive menu toggling.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService,
    private router: Router
  ) { }

  /**
   * Scrolls smoothly to the section with the given ID.
   * If not on the main page, navigates there first.
   *
   * @param sectionId The ID of the section to scroll to.
   */
  scrollToSection(sectionId: string): void {
    if (this.router.url === '/') {
      this.scrollService.scrollTo(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        // Kurzes Delay, damit DOM gerendert ist
        setTimeout(() => {
          this.scrollService.scrollTo(sectionId);
        }, 50);
      });
    }
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
