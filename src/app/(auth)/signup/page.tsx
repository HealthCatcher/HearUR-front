import React from "react";
import "./register.css";
import Link from "next/link";
import SignUp from "@/components/signup/SignUp";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "HearUR | 회원가입",
};

const SignupPage = () => {
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
