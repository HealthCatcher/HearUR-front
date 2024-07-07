"use client";
import React, {useState} from "react";
import "./register.css";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation"
import SignUp from "@/app/signup/SignUp";

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
    console.log("handle signup");
    if (!validateEmail(username)) {
      setPasswordError("이메일 형식이 올바르지 않습니다.");
      return;
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
      setPasswordError("비밀번호에 특수문자를 포함해야 합니다.")
      return;
    }
    // 이후 회원가입 로직 추가
    setPasswordError(""); // 에러 메시지 초기화
    onSignup(username, name, password); // 실제 회원가입 함수 호출
  };

  const onSignup = (username: string, name: string, password: string) => {
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
          console.log("response: ",response);
          if(response.status===201) router.push("/login");
          else throw new Error("회원가입 요청에 문제가 생겼습니다.");
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
          <SignUp/>
          <div className="flex justify-center mt-2 mb-4">
            <span className="mr-6">이미 계정이 있으신가요?</span>
            <Link href="/login" className="text-blue-500">로그인하기</Link>
          </div>
        </div>
      </div>
  );
};

export default SignupPage;
