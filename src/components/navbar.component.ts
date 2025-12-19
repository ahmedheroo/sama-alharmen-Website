import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <!-- Logo / Brand Name -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-full bg-[#52DE4B] flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-[#F1E100]">
            س
          </div>
          <h1 class="text-xl md:text-2xl font-bold text-gray-800">
            سما <span class="text-[#52DE4B]">الحرمين</span>
          </h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 items-center font-medium">
          <a href="#" (click)="scrollTo($event, 'top')" class="hover:text-[#52DE4B] transition-colors">الرئيسية</a>
          <a href="#services" (click)="scrollTo($event, 'services')" class="hover:text-[#52DE4B] transition-colors">خدماتنا</a>
          <a href="#packages" (click)="scrollTo($event, 'packages')" class="hover:text-[#52DE4B] transition-colors">الباقات</a>
          <a href="#gallery" (click)="scrollTo($event, 'gallery')" class="hover:text-[#52DE4B] transition-colors">المعرض</a>
          <a href="#contact" (click)="scrollTo($event, 'contact')" class="px-5 py-2 bg-[#F1E100] text-gray-900 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md">
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
            <a href="#" (click)="scrollTo($event, 'top')" class="block py-2 hover:bg-gray-50 rounded-lg">الرئيسية</a>
            <a href="#services" (click)="scrollTo($event, 'services')" class="block py-2 hover:bg-gray-50 rounded-lg">خدماتنا</a>
            <a href="#packages" (click)="scrollTo($event, 'packages')" class="block py-2 hover:bg-gray-50 rounded-lg">الباقات</a>
            <a href="#gallery" (click)="scrollTo($event, 'gallery')" class="block py-2 hover:bg-gray-50 rounded-lg">المعرض</a>
            <a href="#contact" (click)="scrollTo($event, 'contact')" class="block py-2 bg-[#F1E100] text-gray-900 font-bold rounded-lg shadow-sm">اتصل بنا</a>
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