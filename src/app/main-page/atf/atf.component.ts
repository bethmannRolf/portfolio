import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
// import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { ScrollService } from "../../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';



@Component({
    selector: 'app-atf',

    imports: [CommonModule, HeaderComponent, TranslateModule ],
    templateUrl: './atf.component.html',
    styleUrl: './atf.component.scss'
})
export class AtfComponent {

  constructor(private scrollService: ScrollService) {}

scrollToSection(sectionId: string) {
  this.scrollService.scrollTo(sectionId);
}



}



