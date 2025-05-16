// import { Routes } from '@angular/router';

// export const routes: Routes = [];



import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';



export const routes: Routes = [
  { path: '', component: MainPageComponent },
   { path: '', component: ImprintComponent },
    // { path: '', component: PrivacyPolicyComponent },
    //  { path: '', component: LegalNoticeComponent },
 
];
