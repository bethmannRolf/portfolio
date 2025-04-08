import { Component } from '@angular/core';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [QuotationCardComponent, SliderNavigationComponent, CommonModule],
  templateUrl: './quotations.component.html',
  styleUrl: './quotations.component.scss'
})
export class QuotationsComponent {
 
  currentIndex = 0;

  // onSlideChanged(index: number) {
  //   this.currentIndex = index;
  // }
  

  onSlideChanged(index: number) {
    const slidesLength = this.slides.length;
  
    // Damit wir nicht aus dem Array rauslaufen:
    this.currentIndex = (index + slidesLength) % slidesLength;
  }
  


  getVisibleSlides() {
    const prev = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    const next = (this.currentIndex + 1) % this.slides.length;
    return [this.slides[prev], this.slides[this.currentIndex], this.slides[next]];
  }
  



  slides = [
    {
      text: 'Erstes Zitat...',
      name: 'Max Mustermann',
      position: 'Entwickler'
    },
    {
      text: 'Zweites Zitat...',
      name: 'Name 2',
      position: 'Designer'
    },
    {
      text: 'Drittes Zitat...',
      name: 'John Doe',
      position: 'Manager'
    }
  ];



  // getSlideTransform() {
  //   const slideWidth = 632 + 80; // Slide + Abstand
  //   return `translateX(-${slideWidth}px)`; // Immer der mittlere (Index 1) soll zentriert sein
  // }
  

  getSlideTransform() {
    const slideWidth = 632 + 80; // slide width + gap
    const offset = slideWidth * this.currentIndex;
    return `translateX(-${offset}px)`;
  }
  

}
