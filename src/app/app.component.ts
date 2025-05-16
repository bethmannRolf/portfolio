import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CursorHighlightComponent } from './cursor-highlight/cursor-highlight.component';
import { MainPageComponent } from './main-page/main-page.component';



@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, CursorHighlightComponent, MainPageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}



