import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, FooterComponent],
  template: `
<app-navbar></app-navbar>
    <section id="reservation" class="py-20 bg-gradient-to-br from-green-100 via-green-50 to-yellow-100 relative min-h-screen">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-[#52DE4B] font-bold tracking-wider uppercase text-sm">حجز جديد</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2">احجز رحلتك بسهولة</h2>
          <p class="text-gray-600 mt-4">خطوات بسيطة تفصلك عن رحلتك المباركة</p>
        </div>

        <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          <div class="bg-gray-50 p-6 border-b border-gray-100">
            <div class="flex items-center justify-between relative">
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-0"></div>
              <div class="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#52DE4B] transition-all duration-500 -z-0" [style.width]="progressWidth()"></div>
              
              @for (step of [1, 2, 3, 4]; track step) {
                <div class="relative z-10 flex flex-col items-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 border-4"
                       [class]="currentStep() >= step 
                         ? 'bg-[#52DE4B] text-white border-[#52DE4B]' 
                         : 'bg-white text-gray-400 border-gray-200'">
                    {{ step }}
                  </div>
                  <span class="text-xs mt-2 font-medium hidden md:block" 
                        [class]="currentStep() >= step ? 'text-[#52DE4B]' : 'text-gray-400'">
                    {{ getStepLabel(step) }}
                  </span>
                </div>
              }
            </div>
          </div>

          <div class="p-8 min-h-[400px]">
            <form [formGroup]="form">
              
              @if (currentStep() === 1) {
                <div class="animate-fade-in">
                  <h3 class="text-2xl font-bold text-center mb-8">اختر نوع الخدمة</h3>
                  <div class="grid md:grid-cols-3 gap-6">
                    <label class="cursor-pointer group">
                      <input type="radio" formControlName="serviceType" value="hotel" class="peer sr-only">
                      <div class="h-full p-6 rounded-2xl border-2 border-gray-200 peer-checked:border-[#52DE4B] peer-checked:bg-[#52DE4B]/5 hover:border-[#52DE4B]/50 transition-all flex flex-col items-center justify-center gap-4 text-center">
                        <div class="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center peer-checked:bg-[#52DE4B] peer-checked:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span class="font-bold text-lg text-gray-700">فندق فقط</span>
                      </div>
                    </label>

                    <label class="cursor-pointer group">
                      <input type="radio" formControlName="serviceType" value="bus" class="peer sr-only">
                      <div class="h-full p-6 rounded-2xl border-2 border-gray-200 peer-checked:border-[#52DE4B] peer-checked:bg-[#52DE4B]/5 hover:border-[#52DE4B]/50 transition-all flex flex-col items-center justify-center gap-4 text-center">
                        <div class="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center peer-checked:bg-[#52DE4B] peer-checked:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <span class="font-bold text-lg text-gray-700">باص فقط</span>
                      </div>
                    </label>

                    <label class="cursor-pointer group">
                      <input type="radio" formControlName="serviceType" value="both" class="peer sr-only">
                      <div class="h-full p-6 rounded-2xl border-2 border-gray-200 peer-checked:border-[#52DE4B] peer-checked:bg-[#52DE4B]/5 hover:border-[#52DE4B]/50 transition-all flex flex-col items-center justify-center gap-4 text-center">
                        <div class="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center peer-checked:bg-[#52DE4B] peer-checked:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span class="font-bold text-lg text-gray-700">باقة متكاملة (فندق وباص)</span>
                      </div>
                    </label>
                  </div>
                </div>
              }

              @if (currentStep() === 2) {
                <div class="animate-fade-in">
                  <h3 class="text-2xl font-bold text-center mb-8">اختر الوجهة</h3>
                  <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <label class="cursor-pointer group">
                      <input type="radio" formControlName="destination" value="makkah" class="peer sr-only">
                      <div class="p-6 rounded-2xl border-2 border-gray-200 peer-checked:border-[#52DE4B] peer-checked:bg-[#52DE4B]/5 hover:border-[#52DE4B]/50 transition-all flex items-center gap-4">
                        <img src="https://picsum.photos/seed/kaaba/80/80" alt="Makkah" class="w-20 h-20 rounded-lg object-cover">
                        <div>
                          <h4 class="font-bold text-xl text-gray-800">مكة المكرمة فقط</h4>
                          <p class="text-gray-500 text-sm">عمرة وزيارة الحرم المكي</p>
                        </div>
                        <div class="mr-auto w-6 h-6 rounded-full border-2 transition-all"
                             [class]="form.get('destination')?.value === 'makkah' 
                               ? 'border-[#52DE4B] bg-[#52DE4B]' 
                               : 'border-gray-300'"></div>
                      </div>
                    </label>

                    <label class="cursor-pointer group">
                      <input type="radio" formControlName="destination" value="makkah_madinah" class="peer sr-only">
                      <div class="p-6 rounded-2xl border-2 border-gray-200 peer-checked:border-[#52DE4B] peer-checked:bg-[#52DE4B]/5 hover:border-[#52DE4B]/50 transition-all flex items-center gap-4">
                        <img src="https://picsum.photos/seed/nabawi/80/80" alt="Madinah" class="w-20 h-20 rounded-lg object-cover">
                        <div>
                          <h4 class="font-bold text-xl text-gray-800">مكة والمدينة</h4>
                          <p class="text-gray-500 text-sm">برنامج شامل للحرمين</p>
                        </div>
                        <div class="mr-auto w-6 h-6 rounded-full border-2 transition-all"
                             [class]="form.get('destination')?.value === 'makkah_madinah' 
                               ? 'border-[#52DE4B] bg-[#52DE4B]' 
                               : 'border-gray-300'"></div>
                      </div>
                    </label>
                  </div>
                </div>
              }

              @if (currentStep() === 3) {
                <div class="animate-fade-in max-w-3xl mx-auto">
                  <h3 class="text-2xl font-bold text-center mb-8">تفاصيل الحجز</h3>
                  
                  @if (showBusFields()) {
                    <div class="bg-gray-50 p-6 rounded-2xl mb-6 border border-gray-100">
                      <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#52DE4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                        معلومات الباص
                      </h4>
                      <div class="grid md:grid-cols-2 gap-6" formGroupName="busDetails">
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">تاريخ الرحلة</label>
                          <input type="date" formControlName="date" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">عدد المقاعد</label>
                          <input type="number" min="1" formControlName="seats" placeholder="مثال: 4" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                        </div>
                        <div class="md:col-span-2">
                          <label class="block text-sm font-medium text-gray-700 mb-2">نوع الباص</label>
                          <div class="flex gap-4">
                            <label class="flex-1 cursor-pointer">
                              <input type="radio" formControlName="type" value="regular" class="peer sr-only">
                              <div class="text-center py-3 border rounded-xl peer-checked:bg-[#52DE4B] peer-checked:text-gray-900 peer-checked:border-[#52DE4B] hover:bg-gray-50 transition-all font-medium">عادي (مكيف)</div>
                            </label>
                            <label class="flex-1 cursor-pointer">
                              <input type="radio" formControlName="type" value="vip" class="peer sr-only">
                              <div class="text-center py-3 border rounded-xl peer-checked:bg-[#F1E100] peer-checked:text-gray-900 peer-checked:border-[#F1E100] hover:bg-gray-50 transition-all font-medium">VIP (فاخر)</div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                  @if (showHotelFields()) {
                    <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#52DE4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        معلومات الفندق
                      </h4>
                      <div class="grid md:grid-cols-2 gap-6" formGroupName="hotelDetails">
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">تاريخ الوصول</label>
                          <input type="date" formControlName="date" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">عدد الايام</label>
                          <input type="number" min="1" formControlName="days" placeholder="مثال: 1" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                        </div>
                           <div>
                          <label class="block text-sm font-medium text-gray-700 mb-2">عدد الغرف</label>
                          <input type="number" min="1" formControlName="rooms" placeholder="مثال: 1" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                        </div>
                        <div class="md:col-span-2">
                          <label class="block text-sm font-medium text-gray-700 mb-2">نوع السكن</label>
                          <div class="flex gap-4">
                            <label class="flex-1 cursor-pointer">
                              <input type="radio" formControlName="type" value="private" class="peer sr-only">
                              <div class="text-center py-3 border rounded-xl peer-checked:bg-[#52DE4B] peer-checked:text-gray-900 peer-checked:border-[#52DE4B] hover:bg-gray-50 transition-all font-medium">غرفة خاصة</div>
                            </label>
                            <label class="flex-1 cursor-pointer">
                              <input type="radio" formControlName="type" value="shared" class="peer sr-only">
                              <div class="text-center py-3 border rounded-xl peer-checked:bg-[#52DE4B] peer-checked:text-gray-900 peer-checked:border-[#52DE4B] hover:bg-gray-50 transition-all font-medium">سكن مشترك</div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              }

              @if (currentStep() === 4) {
                <div class="animate-fade-in max-w-4xl mx-auto">
                   <div class="grid md:grid-cols-2 gap-8">
                     <div>
                       <h3 class="text-2xl font-bold mb-6">معلومات التواصل</h3>
                       <div class="space-y-4" formGroupName="userInfo">
                         <div>
                           <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الثلاثي</label>
                           <input type="text" formControlName="name" placeholder="محمد عبدالله ..." class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all">
                           @if (form.get('userInfo.name')?.touched && form.get('userInfo.name')?.invalid) {
                             <p class="text-red-500 text-xs mt-1">الاسم مطلوب</p>
                           }
                         </div>
                         <div>
                           <label class="block text-sm font-medium text-gray-700 mb-2">رقم الجوال</label>
                           <input type="tel" formControlName="phone" placeholder="05xxxxxxxx" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#52DE4B] focus:border-transparent outline-none transition-all dir-ltr text-right">
                           @if (form.get('userInfo.phone')?.touched && form.get('userInfo.phone')?.invalid) {
                             <p class="text-red-500 text-xs mt-1">رقم الجوال مطلوب</p>
                           }
                         </div>
                       </div>
                     </div>

                     <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-inner">
                        <h3 class="text-xl font-bold mb-4 border-b pb-2 text-gray-800">ملخص الطلب</h3>
                        
                        <div class="space-y-3 text-sm">
                          <div class="flex justify-between">
                            <span class="text-gray-500">نوع الخدمة:</span>
                            <span class="font-bold">{{ getServiceLabel() }}</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-500">الوجهة:</span>
                            <span class="font-bold">{{ getDestinationLabel() }}</span>
                          </div>
                          
                          @if (showBusFields()) {
                             <div class="pt-2 border-t mt-2">
                               <p class="font-bold text-[#52DE4B] mb-2">تفاصيل الباص</p>
                               <div class="flex justify-between mb-1">
                                 <span class="text-gray-500">التاريخ:</span>
                                 <span>{{ form.get('busDetails.date')?.value }}</span>
                               </div>
                               <div class="flex justify-between mb-1">
                                 <span class="text-gray-500">المقاعد:</span>
                                 <span>{{ form.get('busDetails.seats')?.value }}</span>
                               </div>
                               <div class="flex justify-between">
                                 <span class="text-gray-500">النوع:</span>
                                 <span>{{ form.get('busDetails.type')?.value === 'vip' ? 'VIP' : 'عادي' }}</span>
                               </div>
                             </div>
                          }

                          @if (showHotelFields()) {
                            <div class="pt-2 border-t mt-2">
                               <p class="font-bold text-[#52DE4B] mb-2">تفاصيل الفندق</p>
                               <div class="flex justify-between mb-1">
                                 <span class="text-gray-500">التاريخ:</span>
                                 <span>{{ form.get('hotelDetails.date')?.value }}</span>
                               </div>
                                <div class="flex justify-between mb-1">
                                 <span class="text-gray-500">عدد الايام:</span>
                                 <span>{{ form.get('hotelDetails.days')?.value }}</span>
                               </div>
                               <div class="flex justify-between mb-1">
                                 <span class="text-gray-500">الغرف:</span>
                                 <span>{{ form.get('hotelDetails.rooms')?.value }}</span>
                               </div>
                               <div class="flex justify-between">
                                 <span class="text-gray-500">النوع:</span>
                                 <span>{{ form.get('hotelDetails.type')?.value === 'private' ? 'خاص' : 'مشترك' }}</span>
                               </div>
                             </div>
                          }
                        </div>
                     </div>
                   </div>
                </div>
              }

            </form>
          </div>

          <div class="p-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
             <button (click)="prev()" 
                     [disabled]="currentStep() === 1"
                     class="px-6 py-2 rounded-lg text-gray-600 font-bold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
               السابق
             </button>

             @if (currentStep() < 4) {
               <button (click)="next()" 
                       [disabled]="!isStepValid()"
                       class="px-8 py-3 bg-[#52DE4B] text-gray-900 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:bg-[#40b83a] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all">
                 التالي
               </button>
             } @else {
               <button (click)="submitToWhatsApp()" 
                       [disabled]="form.invalid"
                       class="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-xl font-bold shadow-lg shadow-green-500/20 hover:bg-[#1fbd59] hover:-translate-y-1 disabled:opacity-50 disabled:transform-none transition-all">
                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 تأكيد وإرسال للواتساب
               </button>
             }
          </div>

          <!-- Direct Contact Footer -->
          <div class="px-6 py-4 bg-gray-100 border-t border-gray-200">
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <span class="text-gray-600 font-medium">تواصل مباشر:</span>
              <div class="flex gap-4">
                <a href="tel:0567372301" class="flex items-center gap-2 text-[#52DE4B] hover:text-[#40b83a] font-bold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0567372301
                </a>
                <a href="https://wa.me/966567372301?text=السلام%20عليكم،%20أريد%20الاستفسار%20عن%20الحجز" target="_blank" class="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] font-bold transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/966567372301?text=السلام%20عليكم،%20أريد%20الاستفسار"
     target="_blank"
     class="group fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1fbd59] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 animate-in fade-in zoom-in duration-500"
     aria-label="تواصل معنا عبر واتساب">

    <!-- Tooltip -->
    <span class="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl pointer-events-none -translate-x-2 group-hover:translate-x-0 hidden md:block">
      تواصل معنا عبر واتساب
      <!-- Arrow pointing towards the button -->
      <span class="absolute top-1/2 right-full -mt-1.5 border-[6px] border-transparent border-r-gray-900"></span>
    </span>

    <svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
<app-footer></app-footer>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.4s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationComponent {
  currentStep = signal(1);
  form: FormGroup;

  progressWidth = computed(() => {
    return `${((this.currentStep() - 1) / 3) * 100}%`;
  });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      serviceType: ['', Validators.required],
      destination: ['', Validators.required],
      busDetails: this.fb.group({
        seats: [null],
        date: [''],
        type: ['regular']
      }),
      hotelDetails: this.fb.group({
        rooms: [null],
        date: [''],
        type: ['private'],
        days: [1]
      }),
      userInfo: this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required]
      })
    });
  }

  getStepLabel(step: number): string {
    switch (step) {
      case 1: return 'الخدمة';
      case 2: return 'الوجهة';
      case 3: return 'التفاصيل';
      case 4: return 'التأكيد';
      default: return '';
    }
  }

  showBusFields(): boolean {
    const type = this.form.get('serviceType')?.value;
    return type === 'bus' || type === 'both';
  }

  showHotelFields(): boolean {
    const type = this.form.get('serviceType')?.value;
    return type === 'hotel' || type === 'both';
  }

  isStepValid(): boolean {
    switch (this.currentStep()) {
      case 1:
        return this.form.get('serviceType')?.valid ?? false;
      case 2:
        return this.form.get('destination')?.valid ?? false;
      case 3:
        let valid = true;
        if (this.showBusFields()) {
          const bus = this.form.get('busDetails');
          valid = valid && !!bus?.get('seats')?.value && !!bus?.get('date')?.value;
        }
        if (this.showHotelFields()) {
          const hotel = this.form.get('hotelDetails');
          valid = valid && !!hotel?.get('rooms')?.value && !!hotel?.get('date')?.value;
        }
        return valid;
      case 4:
        return this.form.get('userInfo')?.valid ?? false;
      default:
        return false;
    }
  }

  next() {
    if (this.isStepValid()) {
      this.currentStep.update(s => s + 1);
    }
  }

  prev() {
    this.currentStep.update(s => Math.max(1, s - 1));
  }

  getServiceLabel() {
    const map: any = { hotel: 'فندق', bus: 'باص', both: 'باقة (فندق وباص)' };
    return map[this.form.get('serviceType')?.value] || '';
  }

  getDestinationLabel() {
    const map: any = { makkah: 'مكة المكرمة', makkah_madinah: 'مكة والمدينة' };
    return map[this.form.get('destination')?.value] || '';
  }

  submitToWhatsApp() {
    if (this.form.invalid) return;

    const data = this.form.value;
    let message = `*طلب حجز جديد من الموقع*%0a`;
    message += `---------------------------%0a`;
    message += `*الاسم:* ${data.userInfo.name}%0a`;
    message += `*الجوال:* ${data.userInfo.phone}%0a`;
    message += `---------------------------%0a`;
    message += `*الخدمة المطلوبة:* ${this.getServiceLabel()}%0a`;
    message += `*الوجهة:* ${this.getDestinationLabel()}%0a`;

    if (this.showBusFields()) {
      message += `*تفاصيل الباص:*%0a`;
      message += `*- التاريخ:* ${data.busDetails.date}%0a`;
      message += `*- المقاعد:* ${data.busDetails.seats}%0a`;
      message += `*- النوع:* ${data.busDetails.type === 'vip' ? 'VIP' : 'عادي'}%0a`;
    }

    if (this.showHotelFields()) {
      message += `*تفاصيل الفندق:*%0a`;
      message += `*- تاريخ الوصول:* ${data.hotelDetails.date}%0a`;
      message += `*- عدد الايام:* ${data.hotelDetails.days}%0a`;
      message += `*- الغرف:* ${data.hotelDetails.rooms}%0a`;
      message += `*- النوع:* ${data.hotelDetails.type === 'private' ? 'خاص' : 'مشترك'}%0a`;
    }

    window.open(`https://wa.me/966567372301?text=${message}`, '_blank');
  }
}