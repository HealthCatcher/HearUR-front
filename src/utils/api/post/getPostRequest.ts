import axios from "axios";
import {Post} from "@/components/community/post/PostItem";

const getPostRequest = async (no: number): Promise<Post | number> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.get(`${baseUrl}/api/v1/community/post/${no}`)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("게시글을 불러오는데 문제가 생겼습니다.");
        }
      })
      .catch(error => {
        console.error('getPostRequestApiError');
        //console.error('getPostRequestApiError: ', error);
        return -1;
      });
}


export default getPostRequest;