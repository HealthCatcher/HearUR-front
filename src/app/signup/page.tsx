"use client";
import React, {useState} from "react";
import "./register.css";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation"

//TODO context api 써보자
const validateEmail = (email: string) => {
  // 이메일 형식의 정규 표현식
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};


const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const handleSignup = () => {
    if (!validateEmail(username)) {
      return "이메일 형식이 올바르지 않습니다.";
    }
    if (password.length < 8) {
      setPasswordError("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterPattern.test(password)) {
      return "비밀번호에 특수문자를 포함해야 합니다.";
    }
    // 이후 회원가입 로직 추가
    setPasswordError(""); // 에러 메시지 초기화
    onSignup(username, name, password); // 실제 회원가입 함수 호출
  };

  const onSignup = (username: string, name: string, password: string) => {
    axios.post('http://localhost:8080/signup', {
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
          console.log(response);
          console.log(data);
          if (data.status_code === 200) {
            router.push("/login");
          } else {
            throw new Error('이메일이 중복되었습니다.');
          }
        })
        .catch(error => {
          console.log(error);
          if (error.response.data.status_code=="400"){
            alert("이메일이 중복되었습니다.");
          }
          else alert("회원가입 요청에 문제가 생겼습니다.");
        });
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="signup-container bg-white p-10 rounded-lg shadow-lg">
          <h1 className="signup-title">회원가입</h1>
          <p className="signup-subtitle">Create a new account</p>
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
          {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
          <button
              className="w-80 h-10 bg-blue-500 text-white font-bold rounded-lg mb-2 hover:bg-blue-600"
              onClick={handleSignup}
          >
            회원가입하기
          </button>
          <div className="flex justify-center mt-2 mb-4">
            <span className="mr-6">이미 계정이 있으신가요?</span>
            <Link href="/login" className="text-blue-500">로그인하기</Link>
          </div>
        </div>
      </div>
  );
};

export default SignupPage;
