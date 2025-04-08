import { Component } from '@angular/core';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [QuotationCardComponent, SliderNavigationComponent],
  templateUrl: './quotations.component.html',
  styleUrl: './quotations.component.scss'
})
export class QuotationsComponent {


  slides = [/* deine Slide-Daten */];
  currentIndex = 0;
  
  onSlideChanged(index: number) {
    this.currentSlideIndex = index;
  }
  
  

  quotationSlides = [
    {
      text: 'Erstes Zitat...',
      name: 'Max Mustermann',
      position: 'Entwickler'
    },
    {
      text: 'Zweites Zitat...',
      name: 'Anna Beispiel',
      position: 'Designer'
    },
    {
      text: 'Drittes Zitat...',
      name: 'John Doe',
      position: 'Manager'
    }
  ];
  
  currentSlideIndex = 0;
  









}
