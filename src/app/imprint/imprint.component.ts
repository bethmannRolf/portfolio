import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from '../core/languages.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
    const savedLang = localStorage.getItem('language') || 'de';
    this.translate.use(savedLang);
  }
}