import Link from "next/link";
import ExamplePosts from "@/components/post/ExamplePosts";
import PostListItem from "@/components/post/PostListItem";

export interface Post {
  no: number;
  category: string;
  title: string;
  author: string;
  createDate: string;
}

const PostList = async (posts:any) => {
  return (
      posts.length > 0 ? (
          posts.map((post: Post) => (
              <PostListItem key={post.no} post={post}></PostListItem>
          ))
      ) : (
          <>
            <div>게시글을 불러오는데 오류가 생겼습니다.</div>
            <ExamplePosts/>
          </>
      )
  );
};

export default PostList;