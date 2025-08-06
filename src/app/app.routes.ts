import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

/**
 * Application route definitions.
 * 
 * @type {Routes}
 */
export const routes: Routes = [
  /** Route for the main page component, displayed at the root path */
  { path: '', component: MainPageComponent },

  /** Route for the imprint page */
  { path: 'imprint', component: ImprintComponent },

  /** Route for the privacy policy page */
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  /** Route for the legal notice page */
  { path: 'legal-notice', component: LegalNoticeComponent },
];