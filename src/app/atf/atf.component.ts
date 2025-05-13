import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { ScrollService } from "../core/scroll.service";

@Component({
    selector: 'app-atf',
    imports: [CommonModule, HeaderComponent],
    templateUrl: './atf.component.html',
    styleUrl: './atf.component.scss'
})
export class AtfComponent {

  constructor(private scrollService: ScrollService) {}

scrollToSection(sectionId: string) {
  this.scrollService.scrollTo(sectionId);
}



}



