"use client"

import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n-config"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const switchToLanguage = (newLang: string) => {
    const segments = pathname.split("/")
    segments[1] = newLang
    router.push(segments.join("/"))
  }

  const { navbar } = dictionary

  return (
    <header 
      id="header" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-takwin-dark shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
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
          </div>
          
          <nav className="hidden md:flex gap-8">
            <Link 
              href={`/${lang}`} 
              className="font-medium transition-colors cursor-pointer text-white hover:text-takwin-green"
            >
              {navbar.home}
            </Link>
            <Link 
              href={`/${lang}/products`} 
              className="font-medium transition-colors cursor-pointer text-white hover:text-takwin-green"
            >
              {navbar.products}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className="font-medium transition-colors cursor-pointer text-white hover:text-takwin-green"
            >
              {navbar.about}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="font-medium transition-colors cursor-pointer text-white hover:text-takwin-green"
            >
              {navbar.contact}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => switchToLanguage('en')}
              className={`font-medium transition-colors px-2 text-white hover:text-takwin-green ${lang === 'en' ? 'font-bold' : ''}`}
            >
              EN
            </button>
            <span className="text-white">|</span>
            <button 
              onClick={() => switchToLanguage('ar')}
              className={`font-medium transition-colors px-2 text-white hover:text-takwin-green ${lang === 'ar' ? 'font-bold' : ''}`}
            >
              عربي
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={mobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden py-4 px-4 ${isScrolled ? 'bg-takwin-dark' : 'bg-takwin-dark'}`}>
          <nav className="flex flex-col gap-4">
            <Link 
              href={`/${lang}`} 
              className="font-medium transition-colors text-white hover:text-takwin-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navbar.home}
            </Link>
            <Link 
              href={`/${lang}/products`} 
              className="font-medium transition-colors text-white hover:text-takwin-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navbar.products}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className="font-medium transition-colors text-white hover:text-takwin-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navbar.about}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="font-medium transition-colors text-white hover:text-takwin-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navbar.contact}
            </Link>
            
            <div className="flex gap-4 py-2 border-t border-gray-300">
              <button 
                onClick={() => {
                  switchToLanguage('en');
                  setMobileMenuOpen(false);
                }}
                className={`font-medium transition-colors text-white hover:text-takwin-green ${lang === 'en' ? 'font-bold' : ''}`}
              >
                English
              </button>
              <button 
                onClick={() => {
                  switchToLanguage('ar');
                  setMobileMenuOpen(false);
                }}
                className={`font-medium transition-colors text-white hover:text-takwin-green ${lang === 'ar' ? 'font-bold' : ''}`}
              >
                العربية
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
