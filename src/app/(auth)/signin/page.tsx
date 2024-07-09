import "./login.css"
import Link from "next/link";
import SignIn from "@/components/signin/SignIn";
import OauthLogin from "@/components/signin/OauthLogin";
import {Metadata} from "next";

export const metadata:Metadata = {
  title: "HearUR | 로그인",
};

const Page = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="login-container bg-white pt-10 pb-10 pl-20 pr-20 rounded-lg shadow-lg">
          <h1 className="login-title">로그인</h1>
          <p className="login-subtitle">Please sign in to continue</p>
          <SignIn/>
          <div className="flex justify-center mt-2 mb-4">
            <span className={"mr-6"}>계정이 없으신가요?</span>
            <Link href="/signup" className="text-blue-500">회원가입하기</Link>
          </div>
          <OauthLogin/>
        </div>
      </div>
  );
}

export default Page;