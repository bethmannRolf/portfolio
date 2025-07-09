import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { CursorHighlightComponent } from './cursor-highlight/cursor-highlight.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, CursorHighlightComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}