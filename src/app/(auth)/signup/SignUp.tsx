"use client";
import React, {useState} from "react";
import fetchSignUp from "@/app/(auth)/signup/fetchSignUp";
import {useRouter} from "next/navigation";

const validateEmail = (email: string) => {
  // 이메일 형식의 정규 표현식
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleSignup = () => {
    console.log("handle signup");
    if (!validateEmail(username)) {
      setErrorMessage("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterPattern.test(password)) {
      setErrorMessage("비밀번호에 특수문자를 포함해야 합니다.")
      return;
    }
    // 이후 회원가입 로직 추가
    setErrorMessage(""); // 에러 메시지 초기화
    fetchSignUp(setErrorMessage, router, username, name, password)
  };
  return (
      <>
        <input
            type="text"
            className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="이메일 email"
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="text"
            className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="이름 name"
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="password"
            className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="비밀번호 8자 이상 password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password"
            className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="비밀번호 확인 confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {
            errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>
        }
        <button
            className="w-80 h-10 bg-blue-500 text-white font-bold rounded-lg mb-2 hover:bg-blue-600"
            onClick={handleSignup}
        >
          회원가입하기
        </button>
      </>
  )
}

export default SignUp;