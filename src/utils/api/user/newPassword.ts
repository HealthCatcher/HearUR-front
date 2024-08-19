import axios from 'axios'

const newPassword = async (password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.post(`${baseUrl}/api/v1/user/new/password`, {
    password: password,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }).then(response => {
    if (response.status === 200) {
      return 1;
    } else {
      throw new Error("비밀번호 변경에 실패했습니다.");
    }
  }).catch(error => {
    console.error('Error: ', error);
    return -1;
  });
}

export default newPassword;