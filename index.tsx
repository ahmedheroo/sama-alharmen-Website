
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/home.component';
import { ReservationComponent } from './src/components/reservation.component';
import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'reservation', component: ReservationComponent },
      {path: '**', redirectTo: '' }
    ])
  ]
}).catch((err) => console.error(err));


