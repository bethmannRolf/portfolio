import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * A standalone component that displays information about the person or author ("About Me" section).
 * Designed to support translations via ngx-translate.
 */
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  // Currently no logic is implemented in this component.
}