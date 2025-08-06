import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

/**
 * Factory function for creating a TranslateHttpLoader instance.
 * Loads translation files from the specified path.
 *
 * @param http The HttpClient instance used to load translation files.
 * @returns A new TranslateHttpLoader instance.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * Application-wide providers including routing, HTTP client,
 * and translation module with a custom loader configuration.
 */
export const appConfig = [
  provideRouter(routes),
  provideHttpClient(),
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  )
];