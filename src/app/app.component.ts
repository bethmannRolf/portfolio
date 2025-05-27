import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';



// import { CursorHighlightComponent } from './cursor-highlight/cursor-highlight.component';
// import { MainPageComponent } from './main-page/main-page.component';
// import { ImprintComponent } from './imprint/imprint.component';
// import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
// import { FooterComponent } from './shared/footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}



