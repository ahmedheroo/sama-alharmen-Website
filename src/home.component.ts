import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import { PackagesComponent } from './components/packages.component';
import { GalleryComponent } from './components/gallery.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { TestimonialsComponent } from './components/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    PackagesComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = 'sama-alharamain';
}