import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <!-- Logo / Brand Name -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-10 h-10 rounded-full bg-[#52DE4B] flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-[#F1E100]">
            س
          </div>
          <h1 class="text-xl md:text-2xl font-bold text-gray-800">
            سما <span class="text-[#52DE4B]">الحرمين</span>
          </h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex flex-1 justify-center items-center gap-8  font-medium mx-4">
          <a routerLink="/home" class="hover:text-[#52DE4B] transition-colors">الرئيسية</a>
          <a href="#services" (click)="scrollTo($event, 'services')" class="hover:text-[#52DE4B] transition-colors">خدماتنا</a>
          <a href="#packages" (click)="scrollTo($event, 'packages')" class="hover:text-[#52DE4B] transition-colors">الباقات</a>
          <a href="#gallery" (click)="scrollTo($event, 'gallery')" class="hover:text-[#52DE4B] transition-colors">المعرض</a>
        </div>
           
          <!-- Desktop Action Buttons (End) -->
        <div class="hidden md:flex items-center gap-3 flex-shrink-0">
          <a routerLink="/reservation" class="flex items-center gap-2 px-5 py-2 bg-[#52DE4B] text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            احجز الآن
          </a>
          <a href="#contact" (click)="scrollTo($event, 'contact')" class="px-5 py-2 bg-[#F1E100] text-gray-900 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            اتصل بنا
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMenu()" class="md:hidden text-gray-800 focus:outline-none p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            @if (isOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-full">
          <div class="flex flex-col p-4 gap-4 text-center">
            <a routerLink="/" class="block py-2 hover:bg-gray-50 rounded-lg">الرئيسية</a>
            <a href="#services" (click)="scrollTo($event, 'services')" class="block py-2 hover:bg-gray-50 rounded-lg">خدماتنا</a>
            <a href="#packages" (click)="scrollTo($event, 'packages')" class="block py-2 hover:bg-gray-50 rounded-lg">الباقات</a>
            <a href="#gallery" (click)="scrollTo($event, 'gallery')" class="block py-2 hover:bg-gray-50 rounded-lg">المعرض</a>
            <div class="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a routerLink="/reservation" class="block py-3 bg-[#52DE4B] text-white font-bold rounded-lg shadow-sm">احجز الآن</a>
              <a href="#contact" (click)="scrollTo($event, 'contact')" class="block py-3 bg-[#F1E100] text-gray-900 font-bold rounded-lg shadow-sm">اتصل بنا</a>
            </div>
          </div>
        </div>
      }
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    this.isOpen.set(false);
    
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}