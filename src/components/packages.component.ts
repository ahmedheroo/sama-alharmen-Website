import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, signal } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  template: `
    <section #sectionRef class="py-20 bg-gray-50 transition-all duration-1000 ease-out transform"
      [class.opacity-0]="!isVisible()"
      [class.translate-y-20]="!isVisible()"
      [class.opacity-100]="isVisible()"
      [class.translate-y-0]="isVisible()">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-[#52DE4B] font-bold tracking-wider uppercase text-sm">اختر ما يناسبك</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">باقات العمرة المميزة</h2>
          <p class="text-gray-600 max-w-xl mx-auto">
            صممنا لكم باقات متنوعة تلبي احتياجات الأفراد والعائلات والشركات بأسعار تنافسية.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- Package 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#52DE4B] hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-800">رحلة 3 أيام</h3>
              <p class="text-sm text-gray-500 mt-2">رحلة سريعة ومباركة</p>
            </div>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-extrabold text-[#52DE4B]">مكة & المدينة</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">زيارة مكة المكرمة</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">زيارة المدينة المنورة</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">نقل بباصات حديثة</span>
              </li>
            </ul>
            <a href="#contact"  (click)="scrollTo($event, 'contact')"class="block w-full py-3 bg-[#52DE4B] text-gray-900 font-bold text-center rounded-lg hover:bg-opacity-90 transition-colors">
              احجز الآن
            </a>
          </div>

          <!-- Package 2 (Featured) -->
          <div class="bg-gray-900 rounded-2xl p-8 shadow-xl border-t-4 border-[#F1E100] transform md:-translate-y-4 flex flex-col relative">
            <div class="absolute top-0 right-0 bg-[#F1E100] text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              الأكثر طلباً
            </div>
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white">رحلة 5 أيام</h3>
              <p class="text-sm text-gray-400 mt-2">استمتع بروحانية أطول</p>
            </div>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-extrabold text-[#F1E100]">برنامج شامل</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#F1E100] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">إقامة مريحة في مكة (3 ليالي)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#F1E100] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">إقامة في المدينة (ليلتان)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#F1E100] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">زيارة المزارات الدينية</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#F1E100] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300">عروض خاصة للعائلات</span>
              </li>
            </ul>
            <a href="#contact"  (click)="scrollTo($event, 'contact')"class="block w-full py-3 bg-[#F1E100] text-gray-900 font-bold text-center rounded-lg hover:bg-yellow-400 transition-colors">
              احجز الآن
            </a>
          </div>

          <!-- Package 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#52DE4B] hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-800">باقة الشركات</h3>
              <p class="text-sm text-gray-500 mt-2">للمجموعات الكبيرة والحملات</p>
            </div>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-extrabold text-[#52DE4B]">أسعار خاصة</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">ترتيبات خاصة للمجموعات</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">حجوزات طيران وباصات خاصة</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#52DE4B] ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">خدمة عملاء VIP</span>
              </li>
            </ul>
            <a href="#contact"  (click)="scrollTo($event, 'contact')"class="block w-full py-3 bg-gray-100 text-gray-800 font-bold text-center rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
              تواصل للتفاصيل
            </a>
          </div>
        </div>
        
        <!-- Family Offer Highlight -->
        <div class="mt-16 bg-gradient-to-r from-[#52DE4B]/20 to-[#F1E100]/20 rounded-2xl p-8 border border-[#52DE4B]/30 text-center transform hover:scale-[1.01] transition-transform">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">✨ عروض خاصة للعائلات ✨</h3>
          <p class="text-gray-600">
            خصومات حصرية عند حجز المجموعات العائلية. وفر في رحلتك القادمة وتمتع بخدماتنا الراقية.
          </p>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagesComponent implements AfterViewInit {
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