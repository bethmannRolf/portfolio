import { Injectable } from '@angular/core';
import { Quotation } from '../../models/quotations.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private quotations: Quotation[] = [
    { text: 'Erstes Zitat...', name: 'Max Mustermann', position: 'Entwickler' },
    { text: 'Zweites Zitat...', name: 'Name 2', position: 'Designer' },
    { text: 'Drittes Zitat...', name: 'John Doe', position: 'Manager' },
    { text: 'Viertes Zitat...', name: 'Name 4', position: 'Developer' },
    { text: 'Fünftes Zitat...', name: 'Name 5', position: 'UX Expert' },
    { text: 'Sechstes Zitat...', name: 'Name 6', position: 'Engineer' }
  ];

  constructor() { }

  getQuotations(): Observable<Quotation[]> {
    return of(this.quotations); 
  }
}
