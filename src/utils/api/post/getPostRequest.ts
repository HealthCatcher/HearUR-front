import axios from "axios";
import {Post} from "@/components/post/PostItem";

const getPostRequest = async (no: number): Promise<Post | number> => {
  return axios.get(`http://localhost:8080/api/v1/community/post/${no}`)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("게시글을 불러오는데 문제가 생겼습니다.");
        }
      })
      .catch(error => {
        console.error('Error: ', error);
        return -1;
      });
}


export default getPostRequest;