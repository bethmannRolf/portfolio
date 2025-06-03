
  
  ///for later use
  // get extendedSlides() {
  //   if (this.slides.length === 0) return [];
  
  //   const first = this.slides[0];
  //   const last = this.slides[this.slides.length - 1];
  
  //   return [last, ...this.slides, first];
  // }
  


// }

import { Component, OnInit } from '@angular/core';
import { Quotation } from '../../models/quotations.model';
import { QuotationService } from './quotations.service';
import { CommonModule } from '@angular/common';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-quotations',
  imports: [CommonModule, QuotationCardComponent, SliderNavigationComponent, TranslateModule],
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {
  currentIndex = 0;
  slides: Quotation[] = [];

constructor(
  private quotationService: QuotationService,
  private translate: TranslateService
) {}


ngOnInit(): void {
  this.loadQuotations();
  this.translate.onLangChange.subscribe(() => {
    this.loadQuotations();
  });
}

loadQuotations(): void {
  this.quotationService.getQuotations().subscribe(data => {

    this.slides = data;
  });
}

  onSlideChanged(index: number) {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
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
}
