import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService } from '../core/cookie-consent.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div *ngIf="!consentGiven" class="cookie-banner">
      <p>Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Sie können zustimmen oder ablehnen.</p>
      <button (click)="acceptCookies()">Akzeptieren</button>
      <button (click)="rejectCookies()">Ablehnen</button>
    </div>
  `,
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {
  consentGiven = false;

  constructor(private cookieService: CookieConsentService) {
    this.consentGiven = !!this.cookieService.getConsent();
  }

  acceptCookies() {
    this.cookieService.setConsent('accepted');
    this.consentGiven = true;
  }

  rejectCookies() {
    this.cookieService.setConsent('rejected');
    this.consentGiven = true;
  }
}