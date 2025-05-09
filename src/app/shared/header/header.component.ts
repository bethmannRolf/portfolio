import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';

@Component({
    selector: 'app-header',
    imports: [CommonModule, LanguageSwitcherComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}


