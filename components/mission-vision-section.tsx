import React from "react";

interface MissionVisionSectionProps {
  dictionary: any;
  lang: string;
}

export default function MissionVisionSection({ dictionary, lang }: MissionVisionSectionProps) {
  const isRtl = lang === 'ar';
  const { missionVision } = dictionary;
  
  return (
    <section id="mission-vision" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#072331] mb-4">{missionVision.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{missionVision.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div id="mission-card" className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#38d784]">
            <div className="w-16 h-16 bg-[#38d784] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-bullseye text-[#38d784] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#072331] mb-4">{missionVision.missionTitle}</h3>
            <p className="text-gray-600 mb-6">{missionVision.mission1}</p>
            <p className="text-gray-600">{missionVision.mission2}</p>
          </div>
          <div id="vision-card" className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#38d784]">
            <div className="w-16 h-16 bg-[#38d784] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-binoculars text-[#38d784] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#072331] mb-4">{missionVision.visionTitle}</h3>
            <p className="text-gray-600 mb-6">{missionVision.vision1}</p>
            <p className="text-gray-600">{missionVision.vision2}</p>
          </div>
        </div>
        <div id="values-section" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#072331] mb-4">{missionVision.valuesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{missionVision.valuesIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="value-card-1" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#38d784] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-lightbulb text-[#38d784] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#072331] mb-2">{missionVision.value1Title}</h3>
              <p className="text-gray-600">{missionVision.value1}</p>
            </div>
            <div id="value-card-2" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#38d784] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-award text-[#38d784] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#072331] mb-2">{missionVision.value2Title}</h3>
              <p className="text-gray-600">{missionVision.value2}</p>
            </div>
            <div id="value-card-3" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#38d784] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-handshake text-[#38d784] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#072331] mb-2">{missionVision.value3Title}</h3>
              <p className="text-gray-600">{missionVision.value3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 