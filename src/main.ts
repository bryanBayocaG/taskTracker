import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponentComponent } from './app/header-component/header-component.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
bootstrapApplication(HeaderComponentComponent);
