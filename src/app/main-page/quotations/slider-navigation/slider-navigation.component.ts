import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-slider-navigation',
    imports: [CommonModule, TranslateModule],
    templateUrl: './slider-navigation.component.html',
    styleUrls: ['./slider-navigation.component.scss']
})
/**
 * Component for navigating through slides.
 * Provides controls to go to the next, previous or a specific slide.
 */
export class SliderNavigationComponent {
  /** Array of slides to navigate */
  @Input() slides: any[] = [];

  /** Index of the currently active slide */
  @Input() currentIndex = 0;

  /**
   * Event emitted when the slide index changes.
   * Emits the new slide index as a number.
   */
  @Output() indexChanged = new EventEmitter<number>();

  /**
   * Navigate to the next slide.
   * Emits the incremented currentIndex.
   */
  nextSlide() {
    this.indexChanged.emit(this.currentIndex + 1);
  }

  /**
   * Navigate to the previous slide.
   * Emits the decremented currentIndex.
   */
  previousSlide() {
    this.indexChanged.emit(this.currentIndex - 1);
  }

  /**
   * Navigate directly to a specific slide by index.
   * @param index The index of the slide to go to.
   */
  goToSlide(index: number) {
    this.indexChanged.emit(index);
  }
}