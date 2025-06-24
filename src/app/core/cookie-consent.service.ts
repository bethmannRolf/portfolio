// src/app/core/cookie-consent.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly consentKey = 'cookieConsent';

  getConsent(): 'accepted' | 'rejected' | null {
    return localStorage.getItem(this.consentKey) as 'accepted' | 'rejected' | null;
  }

  setConsent(value: 'accepted' | 'rejected') {
    localStorage.setItem(this.consentKey, value);
  }

  hasConsented(): boolean {
    return this.getConsent() === 'accepted';
  }
}
