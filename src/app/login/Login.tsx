"use client";
import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useTheme} from "@/components/theme-provider";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setIsLoggedIn} = useTheme();
  const router = useRouter();

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loginHandler(username, password);
    }
  };
  const loginHandler = (username: string, password: string) => {
    if (password.length == 0) {
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
  return (
      <>
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
            onClick={() => loginHandler(username, password)}
        >일반 계정으로 로그인하기
        </button>
      </>
  )
}

export default login;