import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from '../core/languages.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
/**
 * Component for displaying the privacy policy.
 * Sets the translation language based on saved language preference.
 */
export class PrivacyPolicyComponent {

  /**
   * Constructs the PrivacyPolicyComponent.
   * Loads the saved language from localStorage or defaults to German.
   *
   * @param translate - Translation service for internationalization
   * @param langService - Custom language service (currently unused)
   */
  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
  }
}