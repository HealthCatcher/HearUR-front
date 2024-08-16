import Link from "next/link";
import getPostListRequest from "@/utils/api/post/getPostListRequest";
import PostList from "@/components/community/post/PostList";

export const metadata = {
  title: "HearUR | 커뮤니티",
};

const CommunityPage = async () => {
  const posts = await getPostListRequest();
  return (
      <>
        <div>
          <section className="community-cover bg-amber-200 pt-16 pb-20 pl-10">
            <div className="cover-content">
              <h1 className="text-4xl font-bold pb-6">커뮤니티</h1>
              <p className="text-lg mb-4">사람들과 소통하고 정보를 공유해보세요.</p>
              <span className="cover-description text-base">
              여러 건강 정보를 서로 나누어 보세요.
            </span>
            </div>
          </section>
          <section className="community-post-list mt-10">
            <div className="post-list-header flex justify-between items-center mx-10 my-4">
              <div className="text-lg font-bold">최신 글</div>
              <Link
                  className="post-write-button text-black px-4 py-2 rounded-lg hover:bg-blue-200 border border-gray-300"
                  href="/community/write"
              >
                글쓰기
              </Link>
            </div>
            <div className="post-list px-10">
              <PostList posts={posts}/>
            </div>
          </section>
        </div>
      </>
  );
}

export default CommunityPage;