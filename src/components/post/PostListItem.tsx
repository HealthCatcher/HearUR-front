import Link from "next/link";
import {Post} from "@/components/post/PostItem";


const PostListItem = async (key:any, post:Post) => {
  return (
      <Link key={key} href={`/community/post/${post.no}`}>
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