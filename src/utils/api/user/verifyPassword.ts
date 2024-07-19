import axios from 'axios'

export const verifyPassword = async (password: string) => {
  return axios.post('http://localhost:8080/api/v1/user/auth/password', {
    password: password,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("비밀번호 인증에 실패했습니다.");
    }
  }).catch(error => {
    console.error('Error: ', error);
    return -1;
  });
}

export default verifyPassword;