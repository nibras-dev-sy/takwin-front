import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeroProps = {
  dictionary: {
    hero: {
      title: string;
      description: string;
      solutions_button: string;
      contact_button: string;
    }
  };
  lang: string;
};

export default function Hero({ dictionary, lang }: HeroProps) {
  const { hero } = dictionary;
  const isRtl = lang === 'ar';
  
  // Function to render the title with the highlighted part
  const renderTitle = () => {
    const parts = hero.title.split(/<0>(.*?)<\/0>/);
    return (
      <>
        {parts[0]}
        <span className="text-takwin-green">{parts[1]}</span>
        {parts[2]}
      </>
    );
  };

  return (
    <section id="hero" className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-takwin-dark to-[#0d3d54] z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0">
        <img 
          className={`w-full h-full object-cover ${isRtl ? 'scale-x-[-1]' : ''}`}
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9391499f7b-e1ebde49dc34c2f6d0c9.png" 
          alt="abstract circuit board pattern" 
        />
      </div>
      <div className={`absolute ${isRtl ? 'left-0' : 'right-0'} bottom-0 w-full md:w-1/2 h-full opacity-30 z-0`}>
        <img 
          className={`w-full object-contain ${isRtl ? 'object-left-bottom scale-x-[-1]' : 'object-right-bottom'}`}
          src="hero_image.png" 
          alt="3D electronic device render" 
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={isRtl ? { lineHeight: '1.2', letterSpacing: '0.025em' } : {}}>
            {renderTitle()}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed" style={isRtl ? { lineHeight: '1.6', letterSpacing: '0.025em' } : {}}>
            {hero.description}
          </p>
          <div className="text-lg md:text-xl text-gray-200 mb-8 mt-4 leading-relaxed">
            <Link href={`/${lang}/contact`} className="bg-takwin-green hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors text-lg text-center">
              {hero.contact_button}
            </Link>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 ${isRtl ? 'scale-x-[-1]' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
} 