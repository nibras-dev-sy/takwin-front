import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"
import Link from "next/link"

export default async function AboutPage({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const { about } = dictionary

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-takwin-dark to-[#0a3144] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{about.title}</h1>
            <div className="h-1 w-24 bg-takwin-green mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-takwin-dark mb-6">{about.company.title}</h2>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                  <p className="text-gray-700 text-lg mb-6">{about.company.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Innovative Electronic Solutions</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 00-2.929.879l.17-.17A3 3 0 009 8.172z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Cutting-Edge Technology</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Expert Team of Engineers</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -top-5 -left-5 w-20 h-20 bg-takwin-green bg-opacity-20 rounded-full"></div>
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        className="w-full h-auto" 
                        src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                        alt="Electronic engineering and PCB design" 
                      />
                    </div>
                    <div className="absolute -bottom-5 -right-5 w-24 h-24 border-4 border-takwin-green border-opacity-20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-12">
              <h2 className="text-2xl font-bold text-takwin-dark mb-6">Company Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{about.details.website}</h3>
                    <a href="https://www.takwin.com" className="text-takwin-green hover:underline" target="_blank" rel="noopener noreferrer">
                      {about.details.websiteUrl}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{about.details.founded}</h3>
                    <p className="text-gray-600">{about.details.foundedValue}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{about.details.industry}</h3>
                    <p className="text-gray-600">{about.details.industryValue}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-takwin-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-takwin-green" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{about.details.size}</h3>
                    <p className="text-gray-600">{about.details.sizeValue}</p>
                    <p className="text-gray-500 text-sm mt-1">{about.details.employees}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-takwin-dark mb-6">{about.meaning.title}</h2>
              <p className="text-gray-700 text-lg mb-6">{about.meaning.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-takwin-green">
                  <h3 className="text-xl font-semibold text-takwin-dark mb-3">تكوين</h3>
                  <p className="text-gray-600">Modern Arabic</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-takwin-green">
                  <h3 className="text-xl font-semibold text-takwin-dark mb-3">كوّن</h3>
                  <p className="text-gray-600">Ancient Arabic</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-takwin-green">
                  <h3 className="text-xl font-semibold text-takwin-dark mb-3">Takwīn</h3>
                  <p className="text-gray-600">Latin Transliteration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 