import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



export class ScrollService {
scrollTo(id: string) {
  const el = document.getElementById(id);
  console.log('Found element:', el); 
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

}
