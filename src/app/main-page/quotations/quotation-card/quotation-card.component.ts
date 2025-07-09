import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-quotation-card',
    imports: [CommonModule, TranslateModule],
    templateUrl: './quotation-card.component.html',
    styleUrl: './quotation-card.component.scss'
})
export class QuotationCardComponent {
  @Input() text: string = '';
  @Input() name: string = '';
  @Input() position: string = '';
}