import MainLogo from '../../../public/logo/main_logo_545x155.webp'
import Image from 'next/image'
import AuthComponent from "@/app/(home)/AuthComponent";

export const metadata = {
  title: 'HearUR',
  description: 'HearUR 홈페이지입니다.',
};

/** HOME */
const Page = async () => {
  const categories = ['감염병', '선청성 질환', '신생물']
  const healthInfoSummaries = [
    {
      title: '아토피에 좋은 음식',
      imgSrc: 'https://source.unsplash.com/random/300x300/?skin',
    },
    {
      title: '🥕 당근 먹어야함',
      imgSrc: 'https://source.unsplash.com/random/300x300/?carrot',
    },
    {
      title: '비타민 관련 정보',
      imgSrc: 'https://source.unsplash.com/random/300x300/?vitamin',
    },
  ]

  return (
      <>
        <AuthComponent/>
        <div className="p-4 bg-white rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex space-x-4">
            {categories.map((category, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {category}
                </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <Image className="bg-brand-primary-200 w-3/4 rounded-lg shadow-md" src={MainLogo} alt='HearUR_Logo' loading={"lazy"}/>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Health Info Summaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {healthInfoSummaries.map((summary, idx) => (
                <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{summary.title}</h3>
                </div>
            ))}
          </div>
        </div>
        <div className="space-x-4 mt-4">
          <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-700 transition duration-300">
            기본 버튼
          </button>
          <button
              className="px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300">
            아웃라인 버튼
          </button>
          <button className="px-4 py-2 text-blue-500 font-semibold rounded hover:underline transition duration-300">
            텍스트 버튼
          </button>
          <button
              className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-700 transition duration-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            아이콘 버튼
          </button>
        </div>
      </>
  )
}

export default Page;
