import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"

export default async function ContactPage({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const { contact } = dictionary
  const isRtl = lang === 'ar'

  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-b from-takwin-dark to-[#0a3144] text-white relative overflow-hidden">
        {/* Background Grid Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/grid2.avif" 
            alt="Grid Pattern" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{contact.title}</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">{contact.subtitle}</p>
            <div className="h-1 w-24 bg-takwin-green mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-takwin-dark mb-8">{contact.info.title}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-takwin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-takwin-dark mb-2">{contact.info.address.label}</h3>
                      <p className="text-gray-600">{contact.info.address.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-takwin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-takwin-dark mb-2">{contact.info.phone.label}</h3>
                      <p className="text-gray-600" dir="ltr">{contact.info.phone.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-takwin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-takwin-dark mb-2">{contact.info.email.label}</h3>
                      <p className="text-gray-600">{contact.info.email.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-takwin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-takwin-dark mb-2">{contact.info.hours.label}</h3>
                      <p className="text-gray-600">{contact.info.hours.value}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-takwin-dark mb-8">{contact.map.title}</h2>
                <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.086967562598!2d29.006062697461444!3d41.11207235414507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5f125ac0f0b%3A0x1a9fccb9d44d6a5!2sMaslak%2C%20Sar%C4%B1yer%2FIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1653642023025!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Takwin office location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 