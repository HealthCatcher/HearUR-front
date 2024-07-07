import axios from "axios";
import {useRouter} from "next/navigation";

const onSignup = (username: string, name: string, password: string) => {
  const router = useRouter();
  axios.post('http://localhost:8080/api/v1/auth/signup', {
    username: username,
    password: password,
    name: name,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(response => {
        const data = response.data;
        console.log("response: ", response);
        if (response.status === 201){
          router.push("/login");
          return null;
        }
        else throw new Error("회원가입 요청에 문제가 생겼습니다.");
      })
      .catch(error => {
        console.log(error);
        if (error.response.data.status_code == "400") {
          alert("이메일이 중복되었습니다.");
        } else alert("회원가입 요청에 문제가 생겼습니다.");
        return null;
      });
};

export default onSignup;