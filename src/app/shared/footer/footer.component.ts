import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-footer',
    imports: [TranslateModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
/**
 * FooterComponent displays the website footer.
 * Includes translated text using ngx-translate.
 */
export class FooterComponent {
}