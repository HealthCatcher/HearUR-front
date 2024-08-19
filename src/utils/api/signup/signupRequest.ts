import axios from "axios";

const onSignup = (username: string, name: string, password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log('baseUrl: ', baseUrl);
  console.log(`${baseUrl}/api/v1/auth/signup`);
  return axios.post(`${baseUrl}/api/v1/auth/signup`, {
    username: username,
    password: password,
    name: name,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

export default onSignup;