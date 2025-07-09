
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from '../core/languages.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
  }
}