import React from 'react';

type FeaturesProps = {
  dictionary: {
    features: {
      title: string;
      subtitle: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    }
  };
};

export default function FeaturesSection({ dictionary }: FeaturesProps) {
  const { features } = dictionary;
  
  return (
    <section id="features" className="pb-16 pt-8 md:pb-24 md:pt-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-takwin-dark mb-4">{features.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="feature-card-1" className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-takwin-green/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-takwin-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-takwin-dark mb-3">{features.cards[0].title}</h3>
            <p className="text-gray-600">{features.cards[0].description}</p>
          </div>
          
          <div id="feature-card-2" className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-takwin-green/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-takwin-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-takwin-dark mb-3">{features.cards[1].title}</h3>
            <p className="text-gray-600">{features.cards[1].description}</p>
          </div>
          
          <div id="feature-card-3" className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-takwin-green/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-takwin-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-takwin-dark mb-3">{features.cards[2].title}</h3>
            <p className="text-gray-600">{features.cards[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 