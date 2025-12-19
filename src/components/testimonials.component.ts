import { Component, ChangeDetectionStrategy, signal, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="py-20 bg-gray-50 relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#52DE4B]/5 rounded-bl-full z-0"></div>
        <div class="absolute bottom-0 left-0 w-40 h-40 bg-[#F1E100]/10 rounded-tr-full z-0"></div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Header -->
            <div class="text-center mb-16">
                <span class="text-[#52DE4B] font-bold tracking-wider uppercase text-sm">آراء العملاء</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">ماذا قالوا عنا</h2>
                <div class="w-24 h-1 bg-[#F1E100] mx-auto rounded-full"></div>
                <p class="text-gray-600 max-w-2xl mx-auto mt-4">
                    نفخر بخدمة ضيوف الرحمن، وسعادتنا تكتمل برضاكم. إليكم بعض تجارب عملائنا الكرام.
                </p>
            </div>

            <!-- Carousel -->
            <div class="max-w-4xl mx-auto relative">
                <!-- Navigation Buttons (Desktop) -->
                <button (click)="prev()" class="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-20 text-gray-400 hover:text-[#52DE4B] transition-colors p-2" aria-label="السابق">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <button (click)="next()" class="hidden md:block absolute top-1/2 -left-12 transform -translate-y-1/2 z-20 text-gray-400 hover:text-[#52DE4B] transition-colors p-2" aria-label="التالي">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <!-- Cards Wrapper -->
                <div class="relative min-h-[400px] md:min-h-[350px]">
                    @for (testimonial of testimonials; track testimonial.id; let i = $index) {
                        <div class="absolute inset-0 transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center p-4"
                             [class.opacity-0]="i !== currentIndex()"
                             [class.scale-95]="i !== currentIndex()"
                             [class.pointer-events-none]="i !== currentIndex()"
                             [class.opacity-100]="i === currentIndex()"
                             [class.scale-100]="i === currentIndex()"
                             [class.z-10]="i === currentIndex()"
                        >
                             <!-- Card -->
                             <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full text-center border border-gray-100 relative max-w-2xl">
                                <!-- Quote Icon -->
                                <div class="absolute top-6 right-8 text-[#F1E100]/20">
                                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.331 15.186 16.278 14.542C17.078 13.998 17.5 13.5 17.5 12C17.5 10.5 16.5 10.5 15.5 10.5C14.072 10.5 12.981 9.409 12.981 8C12.981 6.591 14.072 5.5 15.5 5.5C17.653 5.5 21.017 7.234 21.017 12C21.017 17.5 14.017 21 14.017 21ZM5.5 21L5.5 18C5.5 16.054 6.814 15.186 7.761 14.542C8.561 13.998 8.983 13.5 8.983 12C8.983 10.5 7.983 10.5 6.983 10.5C5.555 10.5 4.464 9.409 4.464 8C4.464 6.591 5.555 5.5 6.983 5.5C9.136 5.5 12.5 7.234 12.5 12C12.5 17.5 5.5 21 5.5 21Z" /></svg>
                                </div>

                                <div class="flex justify-center mb-6">
                                    <div class="relative w-20 h-20 rounded-full border-4 border-[#52DE4B]/20 p-1">
                                        <img [ngSrc]="testimonial.avatar" [alt]="testimonial.name" width="80" height="80" class="rounded-full object-cover w-full h-full" />
                                    </div>
                                </div>

                                <div class="flex justify-center mb-4 text-[#F1E100]">
                                    @for (star of [1,2,3,4,5]; track star) {
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    }
                                </div>

                                <p class="text-xl text-gray-700 italic mb-6 leading-relaxed relative z-10">
                                    "{{ testimonial.text }}"
                                </p>

                                <div>
                                    <h4 class="font-bold text-lg text-gray-900">{{ testimonial.name }}</h4>
                                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                                </div>
                             </div>
                        </div>
                    }
                </div>

                <!-- Dots -->
                <div class="flex justify-center gap-2 mt-8">
                    @for (item of testimonials; track item.id; let i = $index) {
                        <button (click)="goTo(i)" 
                            class="h-3 rounded-full transition-all duration-300"
                            [class.w-8]="i === currentIndex()"
                            [class.bg-[#52DE4B]]="i === currentIndex()"
                            [class.w-3]="i !== currentIndex()"
                            [class.bg-gray-300]="i !== currentIndex()"
                            [attr.aria-label]="'Go to slide ' + (i + 1)"
                        ></button>
                    }
                </div>
            </div>
        </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
    currentIndex = signal(0);
    intervalId: any;

    testimonials = [
        {
            id: 1,
            name: 'محمد العتيبي',
            role: 'معتمر',
            text: 'خدمة ممتازة جداً، الباصات حديثة ومكيفة، والفنادق كانت قريبة جداً من الحرم. شكراً لفريق سما الحرمين على الاهتمام بالتفاصيل.',
            avatar: 'https://picsum.photos/seed/avatar1/100/100'
        },
        {
            id: 2,
            name: 'سارة الغامدي',
            role: 'رحلة عائلية',
            text: 'تجربة رائعة مع العائلة. السائق كان محترفاً ومتعاوناً، والرحلة كانت مريحة رغم طول المسافة. أنصح بهم بشدة.',
            avatar: 'https://picsum.photos/seed/avatar2/100/100'
        },
        {
            id: 3,
            name: 'عبدالله العنزي',
            role: 'مشرف حملة',
            text: 'تعاملنا معهم لحجز مجموعة كبيرة، وكان التنسيق عالي المستوى والالتزام بالمواعيد دقيقاً. شركة تستحق الثقة.',
            avatar: 'https://picsum.photos/seed/avatar3/100/100'
        }
    ];

    ngOnInit() {
        this.startAutoSlide();
    }

    ngOnDestroy() {
        this.stopAutoSlide();
    }

    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, 6000);
    }

    stopAutoSlide() {
        if (this.intervalId) clearInterval(this.intervalId);
    }

    next() {
        this.stopAutoSlide();
        this.currentIndex.update(i => (i + 1) % this.testimonials.length);
        this.startAutoSlide();
    }

    prev() {
        this.stopAutoSlide();
        this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
        this.startAutoSlide();
    }

    goTo(index: number) {
        this.stopAutoSlide();
        this.currentIndex.set(index);
        this.startAutoSlide();
    }
}