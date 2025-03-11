import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  selectedLanguage: 'de' | 'en' = 'de'; // Standardmäßig Deutsch aktiv

  setLanguage(lang: 'de' | 'en') {
    this.selectedLanguage = lang;
  }
}