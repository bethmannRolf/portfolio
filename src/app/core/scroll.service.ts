import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollTo(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
