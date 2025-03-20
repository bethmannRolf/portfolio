import { Component } from '@angular/core';
import { QuotationCardComponent } from './quotation-card/quotation-card.component';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [QuotationCardComponent],
  templateUrl: './quotations.component.html',
  styleUrl: './quotations.component.scss'
})
export class QuotationsComponent {

}
