"use client"

import Link from "next/link"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"

export default function Footer({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const isRtl = lang === 'ar';
  const currentYear = new Date().getFullYear();
  const { navbar } = dictionary;

  return (
    <footer id="footer" className="bg-[#072331] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 ${isRtl ? 'rtl' : 'ltr'}`}>
          {/* Company Info */}
          <div>
          <Link href={`/${lang}`} className="flex items-center cursor-pointer">
              <Image 
                src="/logo.jpg" 
                alt="Takwīn Logo" 
                width={40} 
                height={40} 
                className="rounded-md mr-2" 
              />
              <span className="text-xl font-bold text-white">
                {lang === 'ar' ? 'تكوين' : 'Takwīn'}
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              {isRtl 
                ? 'تحويل أفكارك الإلكترونية إلى واقع مع تكنولوجيا متطورة وتصميم مبتكر.' 
                : 'Bringing your electronic ideas to life with cutting-edge technology and innovative design.'}
            </p>
            <div className={`flex ${isRtl ? 'gap-4' : 'space-x-4'}`}>
              <span className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </span>
              <span className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                <i className="fa-brands fa-twitter text-xl"></i>
              </span>
              <span className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                <i className="fa-brands fa-facebook text-xl"></i>
              </span>
              <span className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                <i className="fa-brands fa-instagram text-xl"></i>
              </span>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {isRtl ? 'المنتجات' : 'Products'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/products/pcb`} className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                  {isRtl ? 'تصميم PCB' : 'PCB Design'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Navbar Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {isRtl ? 'الصفحات' : 'Pages'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}`} className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                  {navbar.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                  {navbar.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                  {navbar.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-[#38d784] transition-colors cursor-pointer">
                  {navbar.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {isRtl ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className={`flex items-start gap-2`}>
                <i className={`fa-solid fa-location-dot mt-1 text-[#38d784]`}></i>
                <span className="text-gray-300">
                  {isRtl 
                    ? '123 شارع التقنية، حي الإلكترونيات، 12345' 
                    : '123 Tech Street, Electronics District, 12345'}
                </span>
              </li>
              <li className={`flex items-center gap-2`}>
                <i className={`fa-solid fa-phone text-[#38d784]`}></i>
                <span className="text-gray-300" dir="ltr">+966 55 123 4567</span>
              </li>
              <li className={`flex items-center gap-2`}>
                <i className={`fa-solid fa-envelope text-[#38d784]`}></i>
                <span className="text-gray-300">info@takwin.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRtl ? 'rtl' : ''}`}>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {isRtl ? 'تكوين للإلكترونيات. جميع الحقوق محفوظة.' : 'Takwīn Electronics. All rights reserved.'}
            </p>
            <div className={`flex ${isRtl ? 'gap-6' : 'space-x-6'}`}>
              <span className="text-gray-400 hover:text-[#38d784] text-sm transition-colors cursor-pointer">
                {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </span>
              <span className="text-gray-400 hover:text-[#38d784] text-sm transition-colors cursor-pointer">
                {isRtl ? 'شروط الخدمة' : 'Terms of Service'}
              </span>
              <span className="text-gray-400 hover:text-[#38d784] text-sm transition-colors cursor-pointer">
                {isRtl ? 'خريطة الموقع' : 'Sitemap'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
