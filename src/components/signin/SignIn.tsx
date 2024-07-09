"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/utils/context/authContext";
import {SignInRequest} from "@/utils/api/signin/signInRequest";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      signInHandler(username, password);
    }
  };
  const signInHandler = async (username: string, password: string) => {
    if (password.length === 0) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const result = await SignInRequest(username, password);
    if (result.jwt) {
      login({jwt: result.jwt});
      router.push("/");
    } else {
      if (result.error === 401) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("서버 오류가 발생했습니다.");
      }
    }
  };
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
            onClick={() => signInHandler(username, password)}
        >일반 계정으로 로그인하기
        </button>
      </>
  )
}

export default SignIn;