import ExamplePosts from "@/components/post/ExamplePosts";
import PostListItem from "@/components/post/PostListItem";
import React from "react";

export interface Post {
  no: number;
  category: string;
  title: string;
  author: string;
  createDate: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
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