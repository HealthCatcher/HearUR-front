import axios from "axios";

const getPosts = async () => {
  return axios.get('http://localhost:8080/api/v1/community/post')
      .then(response => {
        if (response.status === 200) {
          console.log("response.data: ", response.data)
          return response.data;
        } else {
          throw new Error("게시글을 불러오는데 문제가 생겼습니다.");
        }
      })
      .catch(error => {
        console.error('Error: ', error);
        return [];
      });
}

export default getPosts;