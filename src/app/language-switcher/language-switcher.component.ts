import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../core/languages.service'; // Pfad ggf. anpassen

/**
 * A standalone component that allows the user to switch the application's language.
 * Uses the LanguagesService to update and retrieve the current language setting.
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  /**
   * Injects the LanguagesService to manage language switching.
   *
   * @param languagesService Service responsible for getting and setting the current language.
   */
  constructor(public languagesService: LanguagesService) {}

  /**
   * Sets the application's language using the LanguagesService.
   *
   * @param lang The language to set ('de' or 'en').
   */
  setLanguage(lang: 'de' | 'en'): void {
    this.languagesService.setLanguage(lang);
  }

  /**
   * Returns the currently selected language from the LanguagesService.
   */
  get selectedLanguage(): 'de' | 'en' {
    return this.languagesService.getCurrentLanguage();
  }
}