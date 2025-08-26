import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../core/scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) { }

  /**
   * Smooth scroll to top of the page
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Scrolls to a section on the homepage.
   * Navigates to '/' first if on a different route.
   */
  scrollToSection(sectionId: string): void {
    if (this.router.url === '/') {
      this.scrollService.scrollTo(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollTo(sectionId), 50);
      });
    }
  }

  /**
   * Navigates to a different page and scrolls to top after navigation.
   * Use this for links like legal notice, privacy, imprint.
   */
  navigateAndScroll(path: string): void {
    this.router.navigate([path]).then(() => {
     
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    });
  }
}
