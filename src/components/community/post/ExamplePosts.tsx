import Link from "next/link";

const ExamplePosts = () => {
  return (
      <>
        <Link key={0} href={`/community/post/-1`}>
          <div className="post-item border-b-2 border-gray-200 p-2">
            <div className="post-title font-bold text-xl">게시물 써보셨나요?(title)</div>
            <div className="post-category text-gray-500">질문(category)</div>
            <div className="post-author text-gray-700">운영자(author)</div>
            <div className="post-date text-gray-400">(2024-07-09)</div>
          </div>
        </Link>
        <Link key={1} href={`/community/post/-1`}>
          <div className="post-item border-b-2 border-gray-200 p-2">
            <div className="post-title font-bold text-xl">궁금한게 있어요</div>
            <div className="post-category text-gray-500">질문 게시판</div>
            <div className="post-author text-gray-700">비연</div>
            <div className="post-date text-gray-400">2024-07-09</div>
          </div>
        </Link>
        <Link key={2} href={`/community/post/-1`}>
          <div className="post-item border-b-2 border-gray-200 p-2">
            <div className="post-title font-bold text-xl">이런 느낌</div>
            <div className="post-category text-gray-500">이모저모</div>
            <div className="post-author text-gray-700">비연2</div>
            <div className="post-date text-gray-400">2024-07-09</div>
          </div>
        </Link>
      </>
  );
}

export default ExamplePosts;