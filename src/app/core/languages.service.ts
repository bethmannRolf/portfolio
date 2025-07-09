import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private readonly storageKey = 'language';
  selectedLanguage: 'de' | 'en';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem(this.storageKey) as 'de' | 'en' | null;
    const browserLang = this.translate.getBrowserLang();
    const initialLang: 'de' | 'en' = (browserLang === 'de' || browserLang === 'en') ? browserLang : 'de';
    this.selectedLanguage = savedLang || initialLang;
    this.translate.setDefaultLang('de');
    this.translate.use(this.selectedLanguage);
  }

  setLanguage(lang: 'de' | 'en') {
    if (this.selectedLanguage !== lang) {
      this.selectedLanguage = lang;
      localStorage.setItem(this.storageKey, lang);
      this.translate.use(lang);
    }
  }

  getCurrentLanguage(): 'de' | 'en' {
    return this.selectedLanguage;
  }
}