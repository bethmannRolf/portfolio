import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ChangeDetectorRef
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
  imports: [
    CommonModule,
    QuotationCardComponent,
    SliderNavigationComponent,
    TranslateModule
  ],
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
})
export class QuotationsComponent implements OnInit, AfterViewInit, OnDestroy {
  /** Original slides */
  slides: Quotation[] = [];

  /** Slides inkl. vorderem/hinterem Klon */
  displaySlides: Quotation[] = [];

  /** Aktueller Index innerhalb der displaySlides */
  currentIndex = 1;

  /** Reeller Index innerhalb der Original-Slides */
  get realIndex(): number {
    return (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  slideTransform = '';
  slideTransition = 'transform 0.5s ease';

  @ViewChild('carouselSlide', { static: false }) slideRef!: ElementRef;
  @ViewChildren('carouselSlide') slideRefs!: QueryList<ElementRef>;
  @ViewChild('carouselContainer', { static: false }) containerRef!: ElementRef;

  constructor(
    private quotationService: QuotationService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadQuotations();
    this.translate.onLangChange.subscribe(() => {
      this.loadQuotations();
    });
    window.addEventListener('resize', this.onResize);
  }

  ngAfterViewInit(): void {
    this.slideRefs.changes.subscribe(() => {
      this.deferTransformUpdate();
    });
    this.deferTransformUpdate();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  loadQuotations(): void {
    this.quotationService.getQuotations().subscribe((data) => {
      this.slides = data;

     
      if (this.slides.length > 0) {
        this.displaySlides = [
          this.slides[this.slides.length - 1],
          ...this.slides,
          this.slides[0],
        ];
        this.currentIndex = 1;
      }

      this.deferTransformUpdate();
    });
  }

  onSlideChanged(direction: number): void {
    this.currentIndex += direction;
    this.deferTransformUpdate();
    setTimeout(() => {
      if (this.currentIndex === this.displaySlides.length - 1) {
        this.slideTransition = 'none';
        this.currentIndex = 1;
        this.updateTransform();
        this.cdr.detectChanges();
        setTimeout(() => (this.slideTransition = 'transform 0.5s ease'));
      } else if (this.currentIndex === 0) {
        this.slideTransition = 'none';
        this.currentIndex = this.displaySlides.length - 2;
        this.updateTransform();
        this.cdr.detectChanges();
        setTimeout(() => (this.slideTransition = 'transform 0.5s ease'));
      }
    }, 500);
  }

  private deferTransformUpdate(): void {
    setTimeout(() => {
      this.updateTransform();
      this.cdr.detectChanges();
    });
  }

  private updateTransform(): void {
    if (!this.slideRef?.nativeElement || !this.containerRef?.nativeElement) {
      this.slideTransform = '';
      return;
    }
    
    const slideWidth = this.slideRef.nativeElement.offsetWidth;
    const gap = 80;
    const total = slideWidth + gap;
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);
    const translateX = -(this.currentIndex * total) + centerOffset;
    this.slideTransform = `translateX(${translateX}px)`;
  }

  onResize = () => {
    this.deferTransformUpdate();
  };
}