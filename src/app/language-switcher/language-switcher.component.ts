import { Component } from '@angular/core';

@Component({
    selector: 'app-language-switcher',
    // imports: [],
    templateUrl: './language-switcher.component.html',
    styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  selectedLanguage: 'de' | 'en' = 'de'; // default

  setLanguage(lang: 'de' | 'en') {
    this.selectedLanguage = lang;
  }
}