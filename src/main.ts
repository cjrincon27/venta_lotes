import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore,provideFirestore } from "@angular/fire/firestore";
import { environment } from './enviroments/enviroment';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore())
    ),
  ],
}).catch((err) => console.log(err));
 