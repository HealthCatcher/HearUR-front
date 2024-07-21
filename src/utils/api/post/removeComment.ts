import axios from 'axios'

const removeComment = async (commentNo: string) => {
  if (localStorage.getItem('jwt') === null) {
    alert('로그인이 필요한 기능입니다.');
    return
  }
  return axios.delete(`http://localhost:8080/api/v1/community/comment/${commentNo}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    if (response.status === 204) {
      return 1;
    } else {
      throw new Error("댓글을 삭제하는데 문제가 생겼습니다.");
    }
  }).catch(error => {
    console.error('Error: ', error);
    return -1;
  });
}

export default removeComment;