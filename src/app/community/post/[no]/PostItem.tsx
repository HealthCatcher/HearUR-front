"use client";
import {useEffect, useState} from "react";
import getPost from "@/app/community/post/[no]/getPost";
import {IParams} from "@/app/community/post/[no]/page";

export interface Post {
  no: number;
  author: string;
  category: string;
  title: string;
  content: string;
}

const PostItem = ({params: {no}}: IParams) => {
  const [post, setPost] = useState<Post | null>();
  useEffect(() => {
    (async () => {
      getPost(no).then(data => {
        setPost(data);
      });
    })()
  }, [no]);
  if (!post) return <div>게시글이 불러오는 중입니다...</div>
  return (
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
          <p className="text-sm text-gray-600 mb-2">작성자: <span className="font-medium">{post.author}</span></p>
          <p className="text-sm text-gray-600 mb-4">카테고리: <span className="font-medium">{post.category}</span></p>
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
      </div>
  );
}
export default PostItem;