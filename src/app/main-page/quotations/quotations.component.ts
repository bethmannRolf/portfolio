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
  imports: [CommonModule, QuotationCardComponent, SliderNavigationComponent, TranslateModule],
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
})
export class QuotationsComponent implements OnInit, AfterViewInit, OnDestroy {
  currentIndex = 0;
  slides: Quotation[] = [];
  slideTransform = '';

  @ViewChild('carouselSlide', { static: false }) slideRef!: ElementRef;
  @ViewChildren('carouselSlide') slideRefs!: QueryList<ElementRef>;

  constructor(
    private quotationService: QuotationService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

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
      this.deferTransformUpdate();
    });
  }

  onSlideChanged(index: number): void {
    const slidesLength = this.slides.length;
    this.currentIndex = (index + slidesLength) % slidesLength;
    this.deferTransformUpdate();
  }

  private deferTransformUpdate(): void {
    setTimeout(() => {
      this.updateTransform();
      this.cdr.detectChanges(); 
    });
  }

  private updateTransform(): void {
    if (!this.slideRef?.nativeElement) {
      this.slideTransform = '';
      return;
    }

    const slideWidth = this.slideRef.nativeElement.offsetWidth;
    const gap = 80;
    const total = slideWidth + gap;
    const centerOffset = (window.innerWidth / 2) - (slideWidth / 2);
    const translateX = -(this.currentIndex * total) + centerOffset;
    this.slideTransform = `translateX(${translateX}px)`;
  }

  onResize = () => {
    this.deferTransformUpdate();
  };
}
