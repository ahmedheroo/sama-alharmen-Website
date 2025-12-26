import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  template: `
    <section #sectionRef class="py-20 bg-white transition-all duration-1000 ease-out transform"
      [class.opacity-0]="!isVisible()"
      [class.translate-y-20]="!isVisible()"
      [class.opacity-100]="isVisible()"
      [class.translate-y-0]="isVisible()">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            خدماتنا المتميزة
            <div class="absolute -bottom-2 right-0 w-1/2 h-1 bg-[#52DE4B]"></div>
          </h2>
          <p class="text-gray-600 max-w-xl mx-auto mt-4">
            نقدم مجموعة متكاملة من الخدمات لضمان راحتكم في رحلة العمرة وزيارة المسجد النبوي.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <!-- Bus Service -->
          <div class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="relative h-64 md:h-80 overflow-hidden">
              <img 
                ngSrc="assets/bus5.jpeg" 
                alt="حجز باصات حديثة" 
                fill
                class="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-6 right-6 text-white">
                <div class="w-16 h-16 bg-[#52DE4B] rounded-full flex items-center justify-center mb-4 text-gray-900 shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                   </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2">نقل بري فاخر</h3>
              </div>
            </div>
            <div class="p-8 bg-white">
              <p class="text-gray-600 leading-relaxed mb-6">
                نوفر أحدث الباصات المكيفة والمجهزة بأعلى سبل الراحة والأمان. رحلات منتظمة تنطلق من الرياض إلى مكة والمدينة، مع سائقين ذوي خبرة لضمان وصولكم بسلام.
              </p>
              <ul class="space-y-2 mb-6 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-[#52DE4B]">✓</span> باصات VIP حديثة
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#52DE4B]">✓</span> مقاعد مريحة وواسعة
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#52DE4B]">✓</span> واي فاي وخدمات ضيافة
                </li>
              </ul>
              <a routerLink="/reservation" class="inline-block w-full text-center py-3 bg-gray-50 text-gray-800 font-bold rounded-lg border border-gray-200 hover:bg-[#F1E100] hover:border-[#F1E100] transition-colors">
                احجز مقعدك الآن
              </a>
            </div>
          </div>

          <!-- Hotel Service -->
          <div class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="relative h-64 md:h-80 overflow-hidden">
              <img 
                ngSrc="assets/hotel1.jpeg" 
                alt="حجز فنادق مكة والمدينة" 
                fill
                class="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-6 right-6 text-white">
                <div class="w-16 h-16 bg-[#F1E100] rounded-full flex items-center justify-center mb-4 text-gray-900 shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2">إقامة فندقية راقية</h3>
              </div>
            </div>
            <div class="p-8 bg-white">
              <p class="text-gray-600 leading-relaxed mb-6">
                نضمن لكم إقامة مريحة في أفضل الفنادق القريبة من الحرمين الشريفين. خيارات متنوعة تناسب جميع الميزانيات، من الغرف الاقتصادية إلى الأجنحة الفاخرة المطلة على الكعبة.
              </p>
              <ul class="space-y-2 mb-6 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-[#F1E100]">✓</span> فنادق قريبة من الحرم
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#F1E100]">✓</span> غرف عائلية وفردية
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#F1E100]">✓</span> وجبات بوفيه مفتوح
                </li>
              </ul>
              <a href="#contact"  (click)="scrollTo($event, 'contact')" class="inline-block w-full text-center py-3 bg-gray-50 text-gray-800 font-bold rounded-lg border border-gray-200 hover:bg-[#F1E100] hover:border-[#F1E100] transition-colors">
                استفسر عن الحجز
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements AfterViewInit {
  isVisible = signal(false);
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      
      if (this.sectionRef) {
        observer.observe(this.sectionRef.nativeElement);
      }
    } else {
      this.isVisible.set(true);
    }
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