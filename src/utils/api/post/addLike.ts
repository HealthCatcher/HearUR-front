import axios from 'axios'

export const addLike = async (postNo: number) => {
  if (localStorage.getItem('jwt') === null) {
    alert('로그인이 필요한 기능입니다.');
    return
  }
  return axios.post(`http://localhost:8080/api/v1/community/post/${postNo}/like`, {}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    console.log("addLike api response: ",response);
    if (response.status === 204) {
      return response.data;
    } //else if (){

    //}
    else {
      throw new Error("좋아요를 추가하는데 문제가 생겼습니다.");
    }
  }).catch(error => {
    console.error('Error: ', error);
    return -1;
  });
}