// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-slider-navigation',
//   standalone: true,
//   imports: [],
//   templateUrl: './slider-navigation.component.html',
//   styleUrl: './slider-navigation.component.scss'
// })
// export class SliderNavigationComponent {

// }




import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-navigation.component.html',
  styleUrls: ['./slider-navigation.component.scss']
})
export class SliderNavigationComponent {
  @Input() slides: any[] = [];
  @Input() currentIndex: number = 0;

  @Output() indexChanged = new EventEmitter<number>();

  goToPrevious() {
    const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    this.indexChanged.emit(newIndex);
  }

  goToNext() {
    const newIndex = (this.currentIndex + 1) % this.slides.length;
    this.indexChanged.emit(newIndex);
  }

  goToSlide(index: number) {
    this.indexChanged.emit(index);
  }
}
