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
/**
 * The root component of the application.
 * It includes global layout components like the footer and cursor highlight,
 * as well as the router outlet for page navigation.
 */
export class AppComponent {
  /** The title of the application, used for metadata or display. */
  title = 'Portfolio';
}