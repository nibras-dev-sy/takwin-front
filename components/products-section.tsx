import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductsProps = {
  dictionary: {
    products: {
      title: string;
      subtitle: string;
      viewAll: string;
      learnMore: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    }
  };
  lang: string;
};

export default function ProductsSection({ dictionary, lang }: ProductsProps) {
  const { products } = dictionary;
  
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-takwin-dark mb-4">{products.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{products.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div id="product-card-1" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cd3fc44394-0b5cd0263a2588505129.png" 
                alt="printed circuit board with components" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-takwin-dark mb-2">{products.cards[0].title}</h3>
              <p className="text-gray-600 mb-4">{products.cards[0].description}</p>
              <Link href={`/${lang}/products/pcb`} className="inline-flex items-center text-takwin-green font-medium hover:underline cursor-pointer">
                {products.learnMore}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div id="product-card-2" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c23a8d59d5-5bc35f4f6d1483f7d20d.png" 
                alt="IoT smart home devices" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-takwin-dark mb-2">{products.cards[1].title}</h3>
              <p className="text-gray-600 mb-4">{products.cards[1].description}</p>
              <Link href={`/${lang}/products/iot`} className="inline-flex items-center text-takwin-green font-medium hover:underline cursor-pointer">
                {products.learnMore}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div id="product-card-3" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/316f16d6e3-c56e354b6e2a08630d05.png" 
                alt="industrial robotic arm" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-takwin-dark mb-2">{products.cards[2].title}</h3>
              <p className="text-gray-600 mb-4">{products.cards[2].description}</p>
              <Link href={`/${lang}/products/robotics`} className="inline-flex items-center text-takwin-green font-medium hover:underline cursor-pointer">
                {products.learnMore}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href={`/${lang}/products`} 
            className="inline-flex items-center justify-center bg-takwin-dark hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors cursor-pointer"
          >
            {products.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
} 