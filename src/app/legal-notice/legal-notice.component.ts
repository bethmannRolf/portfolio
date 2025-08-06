import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from '../core/languages.service';

/**
 * A standalone component that displays the legal notice ("Impressum").
 * Initializes the translation service with a saved language from localStorage or defaults to German.
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

  /**
   * Creates an instance of LegalNoticeComponent.
   * Loads the saved language from localStorage (key: 'lang') and sets it in the translation service.
   *
   * @param translate The translation service used to set the current language.
   * @param langService A service for managing available languages (currently not used directly here).
   */
  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
  }
}