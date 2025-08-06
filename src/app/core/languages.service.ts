import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * A service to manage the application's language setting.
 * Uses localStorage to persist the selected language across sessions.
 */
@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  /**
   * The localStorage key used to store the selected language.
   */
  private readonly storageKey = 'language';

  /**
   * The currently selected language ('de' or 'en').
   */
  selectedLanguage: 'de' | 'en';

  /**
   * Initializes the language service.
   * Loads the language from localStorage or falls back to the browser language (default: 'de').
   *
   * @param translate The translation service from ngx-translate.
   */
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem(this.storageKey) as 'de' | 'en' | null;
    const browserLang = this.translate.getBrowserLang();
    const initialLang: 'de' | 'en' = (browserLang === 'de' || browserLang === 'en') ? browserLang : 'de';
    this.selectedLanguage = savedLang || initialLang;

    this.translate.setDefaultLang('de');
    this.translate.use(this.selectedLanguage);
  }

  /**
   * Sets the application language and persists the choice in localStorage.
   *
   * @param lang The language to set ('de' or 'en').
   */
  setLanguage(lang: 'de' | 'en'): void {
    if (this.selectedLanguage !== lang) {
      this.selectedLanguage = lang;
      localStorage.setItem(this.storageKey, lang);
      this.translate.use(lang);
    }
  }

  /**
   * Gets the currently active language.
   *
   * @returns The currently selected language ('de' or 'en').
   */
  getCurrentLanguage(): 'de' | 'en' {
    return this.selectedLanguage;
  }
}