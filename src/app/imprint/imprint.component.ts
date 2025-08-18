import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from '../core/languages.service';

/**
 * A standalone component that displays the imprint ("Impressum") page.
 * Initializes the translation service with a saved language preference.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  /**
   * Creates an instance of ImprintComponent.
   * Sets the current translation language based on localStorage or defaults to German ('de').
   *
   * @param translate The translation service from ngx-translate used to switch application language.
   * @param langService A service managing available languages (injected for potential future use).
   */
  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
     console.log('ImprintComponent geladen');
    const savedLang = localStorage.getItem('language') || 'de';
    this.translate.use(savedLang);
  }
}