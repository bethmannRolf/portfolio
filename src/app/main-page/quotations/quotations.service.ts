import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
 import { Quotation } from '../../models/quotations.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  constructor(private translate: TranslateService) {}

getQuotations(): Observable<Quotation[]> {
  return this.translate.get('QUOTATIONS.SINGLE_CARD').pipe(
    map((quotesObj: any) => {
      return Object.values(quotesObj).map((quote: any) => ({
        text: quote.TEXT,
        name: quote.NAME,
        position: quote.POSITION
      }));
    })
  );
}

}
