import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  /**
   * Smoothly scrolls the viewport to the element with the given ID,
   * with a small offset (default: 5px).
   *
   * @param id The ID of the HTML element to scroll to.
   */
  scrollTo(id: string, offset: number = 5): void {
    const el = document.getElementById(id);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
