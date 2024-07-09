import Link from "next/link";
import getPostListRequest from "@/utils/api/post/getPostListRequest";

export interface Post {
  no: number;
  category: string;
  title: string;
  author: string;
  createDate: string;
}

const PostItems = async () => {
  const posts = await getPostListRequest();
  return (
      posts.length > 0 ? (
          posts.map((post: Post) => (
              <Link key={post.no} href={`/community/post/${post.no}`}>
                <div className="post-item border-b-2 border-gray-200 p-2">
                  <div className="post-title font-bold text-xl">{post.title}</div>
                  <div className="post-category text-gray-500">{post.category}</div>
                  <div className="post-author text-gray-700">{post.author}</div>
                  <div className="post-date text-gray-400">{new Date(post.createDate).toLocaleString()}</div>
                </div>
              </Link>
          ))
      ) : (
          <>
            <div>게시글을 불러오는데 오류가 생겼습니다.</div>
            <Link key={0} href={`/community/post/-1`}>
              <div className="post-item border-b-2 border-gray-200 p-2">
                <div className="post-title font-bold text-xl">게시물 써보셨나요?(title)</div>
                <div className="post-category text-gray-500">질문(category)</div>
                <div className="post-author text-gray-700">운영자(author)</div>
                <div className="post-date text-gray-400">(2024-07-09)</div>
              </div>
            </Link>
          </>
      )
  );
};

export default PostItems;