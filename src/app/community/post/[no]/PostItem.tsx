"use client";
import {useEffect, useState} from "react";
import getPost from "@/app/community/post/[no]/getPost";
import {IParams} from "@/app/community/post/[no]/page";

export interface Post {
  no: number;
  author: string;
  category: string;
  title: string;
}

const PostItem = ({params: {no}}: IParams) => {
  const [post, setPost] = useState<Post|null>();
  useEffect(() => {
    (async () => {
      getPost(no).then(data => {
        setPost(data);
      });
    })()
  },[no]);
  if(!post) return <div>게시글이 불러오는 중입니다...</div>
  return (
      <div>
        <h2>{post.title}</h2>
        <p>작성자: {post.author}</p>
        <p>카테고리: {post.category}</p>
        {/* 내용 등 필요한 정보 추가 */}
      </div>
  );
}
export default PostItem;