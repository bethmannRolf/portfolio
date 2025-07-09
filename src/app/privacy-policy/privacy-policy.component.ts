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
export class PrivacyPolicyComponent {

  constructor(
    private translate: TranslateService,
    private langService: LanguagesService
  ) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.translate.use(savedLang);
  }
}