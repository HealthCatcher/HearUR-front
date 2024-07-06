"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import getPosts from "@/app/community/getPosts";

export interface Post {
  no: number;
  category: string;
  title: string;
  author: string;
  createDate: string;
}

const PostItems = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getPosts();
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        console.error('Error: Received data is not an array');
      }
    })();
  }, []);

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
          <div>게시글이 없습니다.</div>
      )
  );
};

export default PostItems;