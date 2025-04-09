// import { Component } from '@angular/core';
// import { QuotationCardComponent } from './quotation-card/quotation-card.component';
// import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-quotations',
//   standalone: true,
//   imports: [QuotationCardComponent, SliderNavigationComponent, CommonModule],
//   templateUrl: './quotations.component.html',
//   styleUrl: './quotations.component.scss'
// })
// export class QuotationsComponent {
 
//   currentIndex = 0;


//   onSlideChanged(index: number) {
//     const slidesLength = this.slides.length;
    
//     // Damit wir nicht aus dem Array rauslaufen:
//     this.currentIndex = (index + slidesLength) % slidesLength;
    
//     console.log('Aktueller Index nach Änderung:', this.currentIndex);
//   }
  







  
//   getVisibleSlides() {
//     const prev = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
//     const next = (this.currentIndex + 1) % this.slides.length;
//     return [this.slides[prev], this.slides[this.currentIndex], this.slides[next]];
//   }
  






//   slides = [
//     {
//       text: 'Erstes Zitat...',
//       name: 'Max Mustermann',
//       position: 'Entwickler'
//     },
//     {
//       text: 'Zweites Zitat...',
//       name: 'Name 2',
//       position: 'Designer'
//     },
//     {
//       text: 'Drittes Zitat...',
//       name: 'John Doe',
//       position: 'Manager'
//     },
//     {
//       text: 'Vierte Zitat...',
//       name: 'Name 2',
//       position: 'Designer'
//     },
//     {
//       text: 'Fünftes Zitat...',
//       name: 'Name 2',
//       position: 'Designer'
//     },
//     {
//       text: 'Sechstes Zitat...',
//       name: 'Name 2',
//       position: 'Designer'
//     },
//   ];




//   getSlideTransform() {
//     const slideWidth = 712; // 632 + 80 Abstand
//     const offset = this.currentIndex * slideWidth;
//     return `translateX(-${offset}px)`;
//   }
  



// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [CommonModule, QuotationCardComponent, SliderNavigationComponent],
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent {
  currentIndex = 0;

  slides = [
    { text: 'Erstes Zitat...', name: 'Max Mustermann', position: 'Entwickler' },
    { text: 'Zweites Zitat...', name: 'Name 2', position: 'Designer' },
    { text: 'Drittes Zitat...', name: 'John Doe', position: 'Manager' }
    // { text: 'Viertes Zitat...', name: 'Name 4', position: 'Developer' },
    // { text: 'Fünftes Zitat...', name: 'Name 5', position: 'UX Expert' },
    // { text: 'Sechstes Zitat...', name: 'Name 6', position: 'Engineer' }
  ];

  onSlideChanged(index: number) {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
  }

  getVisibleSlides() {
    const prev = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    const next = (this.currentIndex + 1) % this.slides.length;
    return [this.slides[prev], this.slides[this.currentIndex], this.slides[next]];
  }

  // getSlideTransform(): string {
  //   const slideWidth = 632 + 80; // Breite + Abstand
  //   const offset = Math.max(0, (this.currentIndex - 1) * slideWidth);
  //   return `translateX(-${offset}px)`;
  // }
  

  getSlideTransform(): string {
    const slideWidth = 632;
    const gap = 80;
    const totalSlideWidth = slideWidth + gap;
    const containerWidth = window.innerWidth;
  
    const offset = this.currentIndex * totalSlideWidth;
    const centerOffset = offset - (containerWidth / 2) + (slideWidth / 2);
  
    return `translateX(-${centerOffset}px)`;
  }
  
  
  
  



}
