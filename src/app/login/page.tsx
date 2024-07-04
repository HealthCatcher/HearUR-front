"use client";
import React, {useState} from "react";
import "./login.css"
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useTheme} from "@/components/theme-provider";

const onNaverLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/naver";
}
const onGoogleLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
}
const onKakaoLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/kakao";

}

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isLoggedIn, setIsLoggedIn} = useTheme();
  const router = useRouter();
  const login = (username: string, password: string) => {
    if(password.length == 0) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    axios.post("http://localhost:8080/login", {
      username: username,
      password: password,
    }, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
          localStorage.setItem("jwt", response.headers["authorization"]);
          setIsLoggedIn(true);
          router.push("/");
        })
        .catch(error => {
          error.response.status === 401 ? alert("아이디 또는 비밀번호가 일치하지 않습니다.") : alert("서버 오류가 발생했습니다.");
        });
  }
  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      login(username, password);
    }
  };
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="login-container bg-white pt-10 pb-10 pl-20 pr-20 rounded-lg shadow-lg">
          <h1 className="login-title">로그인</h1>
          <p className="login-subtitle">Please sign in to continue</p>
          <input
              type="text"
              className="login-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="password"
              className="login-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
          />
          <button
              className="w-80 h-10 bg-blue-500 text-white font-bold rounded-lg mb-2 hover:bg-blue-600"
              onClick={() => login(username, password)}
          >일반 계정으로 로그인하기
          </button>
          <div className="flex justify-center mt-2 mb-4">
            <span className={"mr-6"}>계정이 없으신가요?</span>
            <Link href="/signup" className="text-blue-500">회원가입하기</Link>
          </div>
          <div className="login-buttons">
            <button className="login-button naver-login" onClick={onNaverLogin}>
              <img src={"login/naver-brand-logo.png"} alt={"logo"}/>Naver &nbsp; 계정으로 로그인
            </button>
            <button className="login-button kakao-login" onClick={onKakaoLogin}>
              <img src={"login/kakao-brand-logo.png"} alt={"logo"}/>Kakao &nbsp;계정으로 로그인
            </button>
            <button className="login-button google-login" onClick={onGoogleLogin}>
              <img src={"login/google-brand-logo.png"} alt={"logo"}/>Google 계정으로 로그인
            </button>
          </div>
        </div>
      </div>
  );
}

export default Page;