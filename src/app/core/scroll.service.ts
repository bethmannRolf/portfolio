import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  /**
   * Smoothly scrolls the viewport to the element with the given ID,
   * with a small offset (default: 5px).
   * A short delay ensures that the element is rendered (important for Firefox).
   *
   * @param id The ID of the HTML element to scroll to.
   * @param offset Vertical offset in pixels (default: 5).
   * @param delay Delay in ms before scrolling (default: 50).
   */
  scrollTo(id: string, offset: number = 5, delay: number = 500): void {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, delay);
  }
}
