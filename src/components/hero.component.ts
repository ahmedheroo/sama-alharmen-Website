import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
      <!-- Background Image Carousel -->
      <div class="absolute inset-0 z-0">
        @for (img of images; track img; let i = $index) {
          <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
               [class.opacity-100]="currentIndex() === i"
               [class.opacity-0]="currentIndex() !== i">
            <img 
              [ngSrc]="img" 
              [alt]="'صورة ترويجية ' + (i+1)" 
              fill
              priority
              class="object-cover w-full h-full brightness-50"
            />
          </div>
        }
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <div class="animate-fade-in-up">
          <span class="inline-block py-1 px-4 rounded-full bg-[#52DE4B] text-gray-900 font-bold text-sm mb-4 border-2 border-[#F1E100]">
            أفضل خدمة لضيوف الرحمن
          </span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            سما الحرمين <br/>
            <span class="text-[#F1E100]">للعمرة والزيارة</span>
          </h1>
          <p class="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 drop-shadow-md">
            رحلة روحانية لا تُنسى بأعلى معايير الراحة والأمان. نحن نهتم بكل تفاصيل رحلتك لتتفرغ للعبادة.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" (click)="scrollTo($event, 'packages')" class="px-8 py-4 bg-[#52DE4B] hover:bg-[#40b83a] text-gray-900 font-bold text-lg rounded-xl transition-all shadow-lg shadow-green-900/20 transform hover:-translate-y-1">
              استعرض الباقات
            </a>
            <a href="#contact" (click)="scrollTo($event, 'contact')"class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-[#F1E100] text-white font-bold text-lg rounded-xl transition-all">
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>

      <!-- Carousel Indicators -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        @for (img of images; track img; let i = $index) {
          <button 
            (click)="setIndex(i)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            [class.bg-[#F1E100]]="currentIndex() === i"
            [class.w-8]="currentIndex() === i"
            [class.bg-white/50]="currentIndex() !== i">
          </button>
        }
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'assets/hero1.jpeg',
    'assets/hero2.webp',
    'assets/hero4.jpg'
  ];
  
  currentIndex = signal(0);
  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.images.length);
    }, 5000); // Change image every 5 seconds
  }

  stopCarousel() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  setIndex(index: number) {
    this.stopCarousel();
    this.currentIndex.set(index);
    this.startCarousel();
  }
    scrollTo(event: Event, id: string) {
    event.preventDefault();
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