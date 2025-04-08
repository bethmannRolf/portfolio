// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-quotation-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './quotation-card.component.html',
//   styleUrl: './quotation-card.component.scss'
// })
// export class QuotationCardComponent {

// }


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotation-card.component.html',
  styleUrl: './quotation-card.component.scss'
})
export class QuotationCardComponent {
  @Input() text: string = '';
  @Input() name: string = '';
  @Input() position: string = '';
}

