import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../core/languages.service'; // Pfad anpassen

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  constructor(public languagesService: LanguagesService) {}

  setLanguage(lang: 'de' | 'en') {
    this.languagesService.setLanguage(lang);
  }

  get selectedLanguage() {
    return this.languagesService.getCurrentLanguage();
  }
}
