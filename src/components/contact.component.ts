import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section #sectionRef class="py-20 bg-white relative overflow-hidden transition-all duration-1000 ease-out transform"
      [class.opacity-0]="!isVisible()"
      [class.translate-y-20]="!isVisible()"
      [class.opacity-100]="isVisible()"
      [class.translate-y-0]="isVisible()">
      <!-- Decorative circles -->
      <div class="absolute -left-20 top-20 w-64 h-64 bg-[#52DE4B]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -right-20 bottom-20 w-64 h-64 bg-[#F1E100]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
          <p class="text-gray-600">نحن هنا لخدمتكم على مدار الساعة. لا تتردد في الاتصال بنا لأي استفسار.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-[#F1E100]/20 text-[#F1E100] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-800">رقم الهاتف</h4>
                <a href="tel:0567372301" class="text-2xl text-[#52DE4B] font-bold hover:underline dir-ltr block text-right">0567372301</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-800">فيسبوك</h4>
                <a href="https://www.facebook.com/share/17n7S2C2RZ/" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
                  تابعنا على صفحتنا الرسمية
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-800">العنوان</h4>
                <p class="text-gray-600">هبة عبدالله الخزرجي، الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <!-- WhatsApp CTA -->
             <a href="https://wa.me/966567372301?text=السلام%20عليكم،%20أريد%20الاستفسار" target="_blank" class="mt-8 flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200 hover:-translate-y-1 transform transition-transform">
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
               </svg>
               تواصل عبر واتساب مباشرة
             </a>
          </div>

          <!-- Map Placeholder / Decorative Image -->
          <div class="h-80 md:h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border-2 border-[#52DE4B]/20 relative hover:shadow-2xl transition-shadow duration-300">
             <img 
               src="https://picsum.photos/seed/riyadhmap/800/800"
               class="absolute inset-0 w-full h-full object-cover"
               alt="خريطة الموقع"
             />
             <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center shadow-2xl max-w-xs transform hover:scale-105 transition-transform duration-300">
                  <p class="font-bold text-gray-800 mb-2">موقعنا</p>
                  <p class="text-sm text-gray-600">الرياض، المملكة العربية السعودية</p>
                  <a href="https://maps.google.com/?q=Riyadh" target="_blank" class="text-blue-600 text-sm mt-2 block hover:underline">عرض على الخريطة</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements AfterViewInit {
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
}