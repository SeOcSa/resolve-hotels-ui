import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl(): string {
  return environment.BASE_URL;
}

const providers = [{
  provide: "BASE_API_URL",
  useFactory: getBaseUrl,
  deps: [],
}];


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
