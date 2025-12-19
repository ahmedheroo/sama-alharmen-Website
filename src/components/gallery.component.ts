import { Component, ChangeDetectionStrategy, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section #sectionRef class="py-20 bg-white transition-all duration-1000 ease-out transform"
      [class.opacity-0]="!isVisible()"
      [class.translate-y-20]="!isVisible()"
      [class.opacity-100]="isVisible()"
      [class.translate-y-0]="isVisible()">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">معرض الصور</h2>
          <p class="text-gray-600 max-w-xl mx-auto">
            نحرص على توثيق جودة خدماتنا. تصفح صور الفنادق والباصات لتتأكد من مستوى الرفاهية الذي ينتظرك.
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex justify-center mb-10">
          <div class="inline-flex bg-gray-100 p-1.5 rounded-2xl">
            <button 
              (click)="setTab('hotels')"
              class="px-8 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2"
              [class.bg-[#F1E100]]="activeTab() === 'hotels'"
              [class.text-gray-900]="activeTab() === 'hotels'"
              [class.text-gray-500]="activeTab() !== 'hotels'"
              [class.shadow-md]="activeTab() === 'hotels'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              صور الفنادق
            </button>
            <button 
              (click)="setTab('buses')"
              class="px-8 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2"
              [class.bg-[#52DE4B]]="activeTab() === 'buses'"
              [class.text-gray-900]="activeTab() === 'buses'"
              [class.text-gray-500]="activeTab() !== 'buses'"
              [class.shadow-md]="activeTab() === 'buses'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              صور الباصات
            </button>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          @if (activeTab() === 'hotels') {
            @for (img of hotelImages; track img.id) {
              <div class="group relative overflow-hidden rounded-2xl h-64 shadow-lg animate-fade-in cursor-pointer">
                <img 
                  [ngSrc]="img.url" 
                  [alt]="img.alt" 
                  fill
                  class="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                  <p class="text-white font-bold text-lg">{{ img.caption }}</p>
                  <p class="text-[#F1E100] text-sm">{{ img.subCaption }}</p>
                </div>
              </div>
            }
          } @else {
            @for (img of busImages; track img.id) {
              <div class="group relative overflow-hidden rounded-2xl h-64 shadow-lg animate-fade-in cursor-pointer">
                <img 
                  [ngSrc]="img.url" 
                  [alt]="img.alt" 
                  fill
                  class="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                  <p class="text-white font-bold text-lg">{{ img.caption }}</p>
                  <p class="text-[#52DE4B] text-sm">{{ img.subCaption }}</p>
                </div>
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements AfterViewInit {
  activeTab = signal<'hotels' | 'buses'>('hotels');
  isVisible = signal(false);
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  // Using Picsum seeds to get consistent random images
  hotelImages = [
    { id: 1, url: 'assets/room7.jpeg', alt: 'فندق مكة', caption: 'غرف مطلة على الحرم', subCaption: 'فخامة وروحانية' },
    { id: 2, url: 'assets/room2.jpeg', alt: 'لوبي الفندق', caption: 'استقبال فندقي فاخر', subCaption: 'خدمة 24 ساعة' },
    { id: 3, url: 'assets/room3.jpeg', alt: 'بوفيه', caption: 'بوفيه مفتوح', subCaption: 'أشهى المأكولات' },
    { id: 4, url: 'assets/room4.jpeg', alt: 'غرفة عائلية', caption: 'أجنحة عائلية واسعة', subCaption: 'راحة لك ولعائلتك' },
    { id: 5, url: 'assets/room5.jpeg', alt: 'فندق المدينة', caption: 'قريب من المسجد النبوي', subCaption: 'موقع استراتيجي' },
    { id: 6, url: 'assets/room6.jpeg', alt: 'خدمة الغرف', caption: 'خدمة غرف مميزة', subCaption: 'نهتم بأدق التفاصيل' },
  ];

  busImages = [
    { id: 1, url: 'assets/bus4.jpeg', alt: 'باص سياحي', caption: 'أسطول باصات حديث', subCaption: 'موديلات السنة' },
    { id: 2, url: 'assets/bus1.jpeg', alt: 'باص من الداخل', caption: 'مقاعد واسعة ومريحة', subCaption: 'رحلة بلا تعب' },
    { id: 3, url: 'assets/bus3.jpeg', alt: 'الطريق', caption: 'رحلات يومية منتظمة', subCaption: 'دقة في المواعيد' },
    { id: 4, url: 'assets/busdriver.jpg', alt: 'سائق', caption: 'سائقين محترفين', subCaption: 'أمان وثقة' },
    { id: 5, url: 'assets/bus7.jpeg', alt: 'باص ليلي', caption: 'خدمات ضيافة', subCaption: 'مشروبات ووجبات خفيفة' },
    { id: 6, url: 'assets/bus6.jpeg', alt: 'مجموعة', caption: 'باصات خاصة للمجموعات', subCaption: 'خصوصية تامة' },
  ];

  setTab(tab: 'hotels' | 'buses') {
    this.activeTab.set(tab);
  }

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
}