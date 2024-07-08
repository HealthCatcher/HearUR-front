import axios from "axios";

const onSignup = (username: string, name: string, password: string) => {
  return axios.post('http://localhost:8080/api/v1/auth/signup', {
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