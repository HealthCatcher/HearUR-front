import Link from "next/link";
import { Post } from "@/components/community/post/PostItem";
import React from "react";

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  //console.log(post);
  return (
    <Link href={`/community/post/${post.no}`}>
      <div className="post-item border-b-2 border-gray-200 p-2">
        <div className="post-title font-bold text-xl">{post.title}</div>
        <div className="post-category text-gray-500">{post.category}</div>
        <div className="post-author text-gray-700">{post.author}</div>
        <div className="post-date text-gray-400">{new Date(post.createDate).toLocaleString()}</div>
      </div>
    </Link>
  );
};

export default PostListItem;
