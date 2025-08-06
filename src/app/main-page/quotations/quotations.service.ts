import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Quotation } from '../../models/quotations.model';
import { Observable, map } from 'rxjs';

/**
 * Service responsible for fetching and formatting quotation data.
 * Retrieves localized quotations via the TranslateService.
 */
@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  /**
   * Creates an instance of QuotationService.
   * @param translate The translation service used to fetch localized data.
   */
  constructor(private translate: TranslateService) { }

  /**
   * Returns an observable that emits an array of quotations.
   * Fetches the data from the translation file under `QUOTATIONS.SINGLE_CARD`.
   *
   * @returns An observable containing a list of Quotation objects.
   */
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