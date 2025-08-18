import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { CursorHighlightComponent } from './cursor-highlight/cursor-highlight.component';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    CursorHighlightComponent,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  showHeader = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Header nur anzeigen, wenn die Route nicht die MainPage ist
        this.showHeader = event.urlAfterRedirects !== '/';

        // Body-Klassen für spezielle Routen setzen
        const body = document.body;
        // Vorherige Klassen entfernen
        body.classList.remove('imprint-page', 'privacy-page', 'legal-page');

        // Neue Klasse je nach Route hinzufügen
        switch (event.urlAfterRedirects) {
          case '/imprint':
            body.classList.add('imprint-page');
            break;
          case '/privacy-policy':
            body.classList.add('privacy-page');
            break;
          case '/legal-notice':
            body.classList.add('legal-page');
            break;
        }
      });
  }
}
