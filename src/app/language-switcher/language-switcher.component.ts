

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  selectedLanguage: 'de' | 'en';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') as 'de' | 'en' | null;

   // fall back solution german. Maybe later in english
    const browserLang = this.translate.getBrowserLang();
    const initialLang: 'de' | 'en' = (browserLang === 'en' || browserLang === 'de') ? browserLang : 'de';

    this.selectedLanguage = savedLang || initialLang;

    this.translate.setDefaultLang('de');
    this.translate.use(this.selectedLanguage);
    console.log('Die Sprache ist', this.selectedLanguage)
  }

  setLanguage(lang: 'de' | 'en') {
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
    this.translate.use(lang);
    console.log('Die Sprache setanguage ist', this.selectedLanguage)
  }
}
