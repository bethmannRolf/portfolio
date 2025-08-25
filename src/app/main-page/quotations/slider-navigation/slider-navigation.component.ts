import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-slider-navigation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './slider-navigation.component.html',
  styleUrls: ['./slider-navigation.component.scss']
})
/**
 * Component for navigating through slides.
 * Works with realIndex (ignores cloned slides).
 */
export class SliderNavigationComponent {
  /** Array of slides to navigate (only real slides, no clones) */
  @Input() slides: any[] = [];

  /** Real index of the currently active slide */
  @Input() currentIndex = 0;

  /**
   * Event emitted when navigation happens.
   * Emits a number: +1 (next), -1 (previous), or an absolute real index.
   */
  @Output() indexChanged = new EventEmitter<number>();

  /** Navigate to the next slide */
  nextSlide() {
    this.indexChanged.emit(1);
  }

  /** Navigate to the previous slide */
  previousSlide() {
    this.indexChanged.emit(-1); // Signal: gehe 1 nach links
  }

  /**
   * Navigate directly to a specific slide (real index).
   * @param index The index of the slide to go to.
   */
  goToSlide(index: number) {
    this.indexChanged.emit(index);
  }
}