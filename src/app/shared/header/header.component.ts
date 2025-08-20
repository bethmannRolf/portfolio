import { Component, ElementRef, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { ScrollService } from "../../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../core/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('menuRef') menuRef!: ElementRef;

  menuOpen = false;
  private menuSub!: Subscription;

  constructor(
    private scrollService: ScrollService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuSub = this.menuService.menuOpen$.subscribe((open) => {
      this.menuOpen = open;
    });
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url === '/') {
      this.scrollService.scrollTo(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollTo(sectionId), 50);
      });
    }
    this.menuService.closeMenu();
  }

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.menuService.toggleMenu();
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
