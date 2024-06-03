import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { HomeComponent } from './app/pages/home/home.component';
import { NgModel } from '@angular/forms';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
