
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';

@Component({
    selector: 'app-quotations',
    imports: [CommonModule, QuotationCardComponent, SliderNavigationComponent],
    templateUrl: './quotations.component.html',
    styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent {
  currentIndex = 0;

  slides = [
    { text: 'Erstes Zitat...', name: 'Max Mustermann', position: 'Entwickler' },
    { text: 'Zweites Zitat...', name: 'Name 2', position: 'Designer' },
    { text: 'Drittes Zitat...', name: 'John Doe', position: 'Manager' },
    { text: 'Viertes Zitat...', name: 'Name 4', position: 'Developer' },
    { text: 'Fünftes Zitat...', name: 'Name 5', position: 'UX Expert' },
    { text: 'Sechstes Zitat...', name: 'Name 6', position: 'Engineer' }
  ];



  onSlideChanged(index: number) {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
    console.log(this.currentIndex)
  }

  getSlideTransform(): string {
    const slideWidth = 632; 
    const gap = 80; 
    const totalSlideWidth = slideWidth + gap;
  
    const containerWidth = window.innerWidth; 
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);
  
    const translateX = -(this.currentIndex * totalSlideWidth) + centerOffset;
  
    return `translateX(${translateX}px)`;
  }
  
  ///for later use
  // get extendedSlides() {
  //   if (this.slides.length === 0) return [];
  
  //   const first = this.slides[0];
  //   const last = this.slides[this.slides.length - 1];
  
  //   return [last, ...this.slides, first];
  // }
  


}

