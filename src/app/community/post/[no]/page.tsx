import getPost from "@/app/community/post/[no]/getPost";
import {Post} from "@/app/community/PostItems";
import PostItem from "@/app/community/post/[no]/PostItem";
export interface IParams {
  params: { no: number };
}

export async function generateMetadata({params: {no}}: IParams) {
  const post:Post = await getPost(no);
  return {
    title: "HearUR | 게시글:" + post.title,
  };
}

const post = ({params: {no}}: IParams) => {
  return (
      <div>
        <PostItem params={{no}}/>
      </div>
  );
}

export default post;