"use client";
import {useState} from "react";
import HealthRecord from "@/components/selfdiagnosis/HealthRecord";
import LifeStyle from "@/components/selfdiagnosis/LifeStyle";
import MentalHealth from "@/components/selfdiagnosis/MentalHealth";
import ChronicDisease from "@/components/selfdiagnosis/ChronicDisease";

const Category = () => {
  const [activeTab, setActiveTab] = useState<string>('healthRecord'); // 초기 탭 설정

  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };
  return (
      <>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="flex text-4xl justify-center font-semibold mb-6">자가진단</h1>
        <div className="flex justify-center space-x-4">
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === 'healthRecord' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('healthRecord')}
          >
            건강 기록
          </button>
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === 'lifeStyle' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('lifeStyle')}
          >
            LifeStyle
          </button>
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === 'mentalHealth' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('mentalHealth')}
          >
            정신 건강
          </button>
          <button
            className={`py-2 px-4 rounded-md focus:outline-none ${
              activeTab === 'chronicDisease' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('chronicDisease')}
          >
            만성 질환
          </button>
        </div>
        <div className="mt-8">
          {activeTab === 'healthRecord' && <HealthRecord />}
          {activeTab === 'lifeStyle' && <LifeStyle />}
          {activeTab === 'mentalHealth' && <MentalHealth />}
          {activeTab === 'chronicDisease' && <ChronicDisease />}
        </div>
      </div>
    </>
  )
}

export default Category;