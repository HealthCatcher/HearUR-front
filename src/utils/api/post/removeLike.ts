import axios from 'axios'

export const removeLike = async (postNo: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.delete(`${baseUrl}/api/v1/community/post/${postNo}/like`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    if (response.status === 204) {
      return response.data;
    } else {
      throw new Error("좋아요를 삭제하는데 문제가 생겼습니다.");
    }
  }).catch(error => {
    console.error('removeLikeApiError: ', error);
    return -1;
  });
}