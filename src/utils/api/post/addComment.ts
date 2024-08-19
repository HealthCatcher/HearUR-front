import axios from 'axios'

const addComment = async (postNo: number, content: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (localStorage.getItem('jwt') === null) {
    alert('로그인이 필요한 기능입니다.');
    return
  }
  return axios.post(`${baseUrl}/api/v1/community/post/${postNo}/comment`, {
    content: content,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    if (response.status === 201) {
      return 1;
    } else {
      throw new Error("댓글을 추가하는데 문제가 생겼습니다.");
    }
  }).catch(error => {
    console.error('addCommentApiError: ', error);
    return -1;
  });
}

export default addComment;