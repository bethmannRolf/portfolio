import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-slider-navigation',
    imports: [CommonModule],
    templateUrl: './slider-navigation.component.html',
    styleUrls: ['./slider-navigation.component.scss']
})
export class SliderNavigationComponent {
  @Input() slides: any[] = [];
  @Input() currentIndex: number = 0;

  @Output() indexChanged = new EventEmitter<number>();


nextSlide() {
  this.indexChanged.emit(this.currentIndex + 1);
}

previousSlide() {
  this.indexChanged.emit(this.currentIndex - 1);
}

  goToSlide(index: number) {
    this.indexChanged.emit(index);
  }
}
