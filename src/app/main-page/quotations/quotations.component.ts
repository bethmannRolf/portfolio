import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Quotation } from '../../models/quotations.model';
import { QuotationService } from './quotations.service';
import { CommonModule } from '@angular/common';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [CommonModule, QuotationCardComponent, SliderNavigationComponent, TranslateModule],
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
})
export class QuotationsComponent implements OnInit, AfterViewInit, OnDestroy {
  currentIndex = 0;
  slides: Quotation[] = [];

  @ViewChild('carouselSlide', { static: false }) slideRef!: ElementRef;

  constructor(
    private quotationService: QuotationService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadQuotations();
    this.translate.onLangChange.subscribe(() => {
      this.loadQuotations();
    });

    window.addEventListener('resize', this.onResize);
  }

  ngAfterViewInit(): void {
    // Timeout to ensure DOM is ready
    setTimeout(() => this.triggerChangeDetection(), 0);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  loadQuotations(): void {
    this.quotationService.getQuotations().subscribe((data) => {
      this.slides = data;
      setTimeout(() => this.triggerChangeDetection(), 0);
    });
  }

  onSlideChanged(index: number): void {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
  }



getSlideTransform(): string {
  if (!this.slideRef?.nativeElement) return '';

  const slideWidth = this.slideRef.nativeElement.offsetWidth;
  const gap = 80; // oder per CSS‑Variable/Media‑Query ändern
  const total = slideWidth + gap;

  const centerOffset = (window.innerWidth / 2) - (slideWidth / 2);
  const translateX = -(this.currentIndex * total) + centerOffset;

  return `translateX(${translateX}px)`;
}






  // force re-evaluation of transform on resize
  onResize = () => {
    this.triggerChangeDetection();
  };

  private triggerChangeDetection(): void {
    // Angular's change detection will pick up transform recalculation
    this.currentIndex = this.currentIndex; // triggers update
  }
}
