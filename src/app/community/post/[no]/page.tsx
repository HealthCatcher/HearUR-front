import getPostRequest from "@/utils/api/post/getPostRequest";
import PostItem, {Post} from "@/components/post/PostItem";
export interface IParams {
  params: { no: number };
}

export async function generateMetadata({params: {no}}: IParams) {
  const fetchPost:Post|number = await getPostRequest(no);
  const post: Post = fetchPost as Post;
  return {
    title: "HearUR | 게시글:" + (post.title ? post.title : "찾을 수 없습니다."),
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