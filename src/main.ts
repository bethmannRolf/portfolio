

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { AppComponent } from './app/app.component';
// import { provideAnimations } from '@angular/platform-browser/animations';

// import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { provideTranslate } from './app/translate.provider';


// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideAnimations(),
//     provideTranslate()
//   ],
// });


import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslate } from './app/translate.provider';


import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideTranslate(),
    ...appConfig  
  ],
});
