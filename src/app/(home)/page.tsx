import MainLogo from '../../../public/logo/main_logo_545x155.webp'
import Image from 'next/image'
import CheckAuth from "@/components/signin/CheckAuth";
import Link from "next/link";

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
    },
    {
      title: '🥕 당근 먹어야함',
    },
    {
      title: '비타민 관련 정보',
    },
  ]

  return (
    <>
      <CheckAuth />
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <section className="welcome-section text-center mb-8">
          <h1 className="text-3xl font-bold">환영합니다!</h1>
          <p className="text-lg text-gray-700">건강 관리, 체험단, 커뮤니티 서비스를 통해 여러분의 건강과 생활을 개선하세요.</p>
        </section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex space-x-4 mb-8">
          {categories.map((category, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <Image className="bg-brand-primary-200 w-3/4 rounded-lg shadow-md" src={MainLogo} alt='HearUR_Logo' loading={"lazy"} />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Health Info Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {healthInfoSummaries.map((summary, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{summary.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-8">
        <section className="services-summary mb-8">
          <h2 className="text-2xl font-bold mb-4">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="service bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">건강정보</h3>
              <p>최신 건강 정보를 제공합니다</p>
            </div>
            <div className="service bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">커뮤니티</h3>
              <p>건강에 관심 있는 사람들과 소통하세요</p>
            </div>
            <div className="service bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">체험단</h3>
              <p>다양한 건강 제품을 체험해보세요</p>
            </div>
            <div className="service bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">자가진단</h3>
              <p>건강 상태를 체크해보세요!</p>
            </div>
          </div>
        </section>
        <section className="latest-posts mb-8">
          <h2 className="text-2xl font-bold mb-4">최신 게시물</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/community/post/1" className="text-blue-600">커뮤니티에서 지금 인기 있는 글</Link></li>
            <li><Link href="/community/post/2" className="text-blue-600">최근 올라온 체험단 리뷰</Link></li>
          </ul>
        </section>
        <section className="promotions mb-8">
          <h2 className="text-2xl font-bold mb-4">이벤트 및 프로모션</h2>
          <p>이번 달 체험단 모집</p>
          <p>신규 가입 이벤트</p>
        </section>
        <section className="testimonials mb-8">
          <h2 className="text-2xl font-bold mb-4">사용자 후기</h2>
          <p>&quot;건강관리로 이런 변화를 경험했어요&quot;</p>
          <p>&quot;이용자들의 성공 이야기&quot;</p>
        </section>
        <section className="quick-links">
          <h2 className="text-2xl font-bold mb-4">빠른 링크</h2>
          <div className="flex space-x-4">
            <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md" href="/self-diagnosis">
              자가진단 시작하기
            </Link>
            <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md" href="/community">
              커뮤니티 참여하기
            </Link>
            <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md" href="/experience-notice">
              체험단 신청하기
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
