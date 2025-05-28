import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-contact',
    imports: [CommonModule, ContactFormComponent, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
