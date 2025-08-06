import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-quotation-card',
    imports: [CommonModule, TranslateModule],
    templateUrl: './quotation-card.component.html',
    styleUrl: './quotation-card.component.scss'
})
/**
 * Component representing a single quotation card.
 * Displays a quotation text, the author's name and position.
 */
export class QuotationCardComponent {
  /** The quotation text to display */
  @Input() text = '';

  /** Name of the person who gave the quotation */
  @Input() name = '';

  /** Position or title of the person */
  @Input() position = '';
}