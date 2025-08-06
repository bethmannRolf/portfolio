import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    imports: [TranslateModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
/**
 * FooterComponent displays the website footer.
 * Includes translated text using ngx-translate.
 */
export class FooterComponent {
}