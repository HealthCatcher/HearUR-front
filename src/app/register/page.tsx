"use client";
import React from "react";
import "./register.css";
import Link from "next/link";

const onSignup = () => {
  alert("회원가입이 완료되었습니다.");
};

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="signup-container bg-white p-10 rounded-lg shadow-lg">
        <h1 className="signup-title">회원가입</h1>
        <p className="signup-subtitle">Create a new account</p>
        <input
          type="text"
          className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Username"
        />
        <input
          type="text"
          className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Email"
        />
        <input
          type="password"
          className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Password"
        />
        <input
          type="password"
          className="signup-input w-80 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Confirm Password"
        />
        <button
          className="w-80 h-10 bg-blue-500 text-white font-bold rounded-lg mb-2 hover:bg-blue-600"
          onClick={onSignup}
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
