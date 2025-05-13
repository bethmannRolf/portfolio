import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { ScrollService } from "../../core/scroll.service";

@Component({
    selector: 'app-header',
    imports: [CommonModule, LanguageSwitcherComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
      constructor(private scrollService: ScrollService) {}
    
    scrollToSection(sectionId: string) {
      this.scrollService.scrollTo(sectionId);
    }
    

}


