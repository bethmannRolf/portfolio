import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ScrollService } from '../../core/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../core/menu.service'; 
import { Subscription } from 'rxjs';
import { CookieBannerComponent } from '../../cookie-banner/cookie-banner.component';
import { BandComponent } from '../../band/band.component';

/**
 * A standalone component that represents the "above the fold" section of the page.
 * It includes the header, language switcher, and cookie banner,
 * and manages responsive navigation behavior.
 */
@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TranslateModule,
    CookieBannerComponent,
    BandComponent
  ],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent implements OnInit, OnDestroy {
  /**
   * A reference to the menu DOM element, used to detect outside clicks.
   */
  @ViewChild('menuRef') menuRef!: ElementRef;

  /**
   * Indicates whether the navigation menu is currently open.
   */
  menuOpen = false;

  /**
   * Subscription to the menu state observable.
   */
  private menuSub!: Subscription;

  /**
   * Creates an instance of AtfComponent.
   *
   * @param scrollService A service used to scroll to specific sections.
   * @param menuService A service used to manage the menu's open/close state.
   */
  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService
  ) {}

  /**
   * Angular lifecycle hook that runs after component initialization.
   * Subscribes to the menu state to reactively update the local `menuOpen` state.
   */
  ngOnInit(): void {
    this.menuSub = this.menuService.menuOpen$.subscribe((open) => {
      this.menuOpen = open;
    });
  }

  /**
   * Scrolls to a section by ID and closes the menu.
   *
   * @param sectionId The ID of the target section to scroll to.
   */
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.menuService.closeMenu(); 
  }

  /**
   * Listens to document-wide clicks and closes the menu if a click occurs outside the menu.
   *
   * @param event The MouseEvent triggered by the click.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen) {
      this.menuService.closeMenu();
    }
  }

  /**
   * Angular lifecycle hook that runs just before the component is destroyed.
   * Unsubscribes from the menu observable to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }
}