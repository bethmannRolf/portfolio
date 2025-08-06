import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService } from '../core/cookie-consent.service';
import { TranslateModule } from '@ngx-translate/core';

/**
 * A component that displays a cookie consent banner to the user.
 * Users can either accept or reject the use of cookies.
 */
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
  /**
   * Indicates whether the user has already given consent for cookies.
   */

  consentGiven = false;

    /**
   * Creates an instance of CookieBannerComponent.
   * Initializes the consent state based on the stored user preference.
   * 
   * @param cookieService A service to get or set the user's cookie consent.
   */
  constructor(private cookieService: CookieConsentService) {
    this.consentGiven = !!this.cookieService.getConsent();
  }

  
  /**
   * Handles the user's acceptance of cookies.
   * Sets the consent state to 'accepted' and hides the banner.
   */
  acceptCookies() {
    this.cookieService.setConsent('accepted');
    this.consentGiven = true;
  }

    /**
   * Handles the user's rejection of cookies.
   * Sets the consent state to 'rejected' and hides the banner.
   */
  rejectCookies() {
    this.cookieService.setConsent('rejected');
    this.consentGiven = true;
  }
}