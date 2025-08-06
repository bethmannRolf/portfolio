import { Injectable } from '@angular/core';

/**
 * A service for managing cookie consent using localStorage.
 * Stores and retrieves the user's decision to accept or reject cookies.
 */
@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  /**
   * The key used to store the user's consent decision in localStorage.
   */
  private readonly consentKey = 'cookieConsent';

  /**
   * Retrieves the current cookie consent status from localStorage.
   * 
   * @returns `'accepted'` if the user accepted cookies, `'rejected'` if rejected, or `null` if no decision has been made yet.
   */
  getConsent(): 'accepted' | 'rejected' | null {
    return localStorage.getItem(this.consentKey) as 'accepted' | 'rejected' | null;
  }

  /**
   * Stores the user's cookie consent decision in localStorage.
   * 
   * @param value `'accepted'` or `'rejected'` depending on the user's choice.
   */
  setConsent(value: 'accepted' | 'rejected'): void {
    localStorage.setItem(this.consentKey, value);
  }

  /**
   * Checks whether the user has explicitly accepted cookies.
   * 
   * @returns `true` if the user accepted cookies, otherwise `false`.
   */
  hasConsented(): boolean {
    return this.getConsent() === 'accepted';
  }
}