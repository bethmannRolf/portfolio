import { Injectable } from '@angular/core';

/**
 * A service that provides smooth scrolling to specific elements on the page.
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /**
   * Smoothly scrolls the viewport to the element with the given ID.
   *
   * @param id The ID of the HTML element to scroll to.
   */
  scrollTo(id: string): void {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}