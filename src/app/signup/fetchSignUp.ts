import axios from "axios";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Dispatch} from "react";

const onSignup = (setErrorMessage: Dispatch<any>, router: AppRouterInstance, username: string, name: string, password: string) => {
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
        console.log("response: ", response);
        if (response.status === 201) {
          alert("회원가입이 완료되었습니다.");
          router.push('/login');
        } else throw new Error("회원가입 요청에 문제가 생겼습니다.");
      })
      .catch(error => {
        console.log(error);
        if (error.response.status == "400") {
          setErrorMessage("이메일이 중복되었습니다.");
        } else {
          setErrorMessage("회원가입 요청에 문제가 생겼습니다. 다시 시도해주세요.");
        }
      });
};

export default onSignup;