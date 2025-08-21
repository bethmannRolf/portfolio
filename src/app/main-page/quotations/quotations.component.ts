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
/**
 * Component to display a carousel slider of quotations.
 * Supports language change and window resize events.
 */
export class QuotationsComponent implements OnInit, AfterViewInit, OnDestroy {
  /** Current active slide index */
  currentIndex = 0;

  /** Array of quotations to display */
  slides: Quotation[] = [];

  /** CSS transform string applied to the slide container */
  slideTransform = '';

  /** Reference to the slide container element */
  @ViewChild('carouselSlide', { static: false }) slideRef!: ElementRef;

  /** References to all slide elements */
  @ViewChildren('carouselSlide') slideRefs!: QueryList<ElementRef>;

  /** Reference to the carousel container */
  @ViewChild('carouselContainer', { static: false }) containerRef!: ElementRef;

  constructor(
    private quotationService: QuotationService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  /** Initialize component: load quotations and subscribe to language changes and resize events */
  ngOnInit(): void {
    this.loadQuotations();
    this.translate.onLangChange.subscribe(() => {
      this.loadQuotations();
    });
    window.addEventListener('resize', this.onResize);
  }

  /** After view initialization: listen to changes in slide elements and update transform accordingly */
  ngAfterViewInit(): void {
    this.slideRefs.changes.subscribe(() => {
      this.deferTransformUpdate();
    });
    this.deferTransformUpdate();
  }

  /** Cleanup on destroy: remove window resize listener */
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  /**
   * Load quotations from the service and update the slides
   */
  loadQuotations(): void {
    this.quotationService.getQuotations().subscribe((data) => {
      this.slides = data;
      this.deferTransformUpdate();
    });
  }

  /**
   * Update the current slide index and apply transform to show the correct slide.
   * @param index New slide index
   */
  onSlideChanged(index: number): void {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
    this.deferTransformUpdate();
  }

  /**
   * Defers the transform update using setTimeout to allow DOM updates to complete.
   * Also triggers Angular change detection manually.
   */
  private deferTransformUpdate(): void {
    setTimeout(() => {
      this.updateTransform();
      this.cdr.detectChanges();
    });
  }

  /**
   * Calculates and sets the CSS transform string to center the current slide.
   * Uses the container width instead of the viewport width to handle zoom/scale correctly.
   */
  private updateTransform(): void {
    if (!this.slideRef?.nativeElement || !this.containerRef?.nativeElement) {
      this.slideTransform = '';
      return;
    }

    const slideWidth = this.slideRef.nativeElement.offsetWidth;
    const gap = 80;
    const total = slideWidth + gap;

    // Container statt Viewport verwenden
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);

    const translateX = -(this.currentIndex * total) + centerOffset;
    this.slideTransform = `translateX(${translateX}px)`;
  }

  /** Handler for window resize events, triggers transform update */
  onResize = () => {
    this.deferTransformUpdate();
  };
}
