import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ScrollService } from '../../core/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { MenuService } from '../../core/menu.service'; 
import { Subscription } from 'rxjs';
import { CookieBannerComponent } from '../../cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule, LanguageSwitcherComponent, CookieBannerComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent implements OnInit, OnDestroy {
  @ViewChild('menuRef') menuRef!: ElementRef;
  menuOpen = false;
  private menuSub!: Subscription;

  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.menuSub = this.menuService.menuOpen$.subscribe((open) => {
      this.menuOpen = open;
      console.log('menuOpen$ Wert:', open);
    });
  }


  

  scrollToSection(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
    this.menuService.closeMenu(); 
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen) {
      this.menuService.closeMenu();
    }
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }
}
