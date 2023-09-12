import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';

export const firebaseCredentials = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-project-id>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseCredentials)
    )
  ]
};
