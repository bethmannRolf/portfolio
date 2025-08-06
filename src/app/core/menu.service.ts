import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * A service for managing the state of a navigation menu (open or closed).
 * Exposes an observable to allow components to react to menu state changes.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  /**
   * Internal subject holding the current open/closed state of the menu.
   */
  private menuOpenSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable that emits the current state of the menu.
   * Components can subscribe to this to reactively update UI.
   */
  menuOpen$ = this.menuOpenSubject.asObservable();

  /**
   * Toggles the menu state between open and closed.
   */
  toggleMenu(): void {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }

  /**
   * Closes the menu if it is currently open.
   */
  closeMenu(): void {
    this.menuOpenSubject.next(false);
  }
}