"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import { useTheme } from "@/components/theme-provider";

const LoginButton = () => {
  const {setIsLoggedIn } = useTheme();
  useRouter();

  useEffect(() => {
      setIsLoggedIn(localStorage.getItem("jwt") !== null);
  }, []);

  if (localStorage.getItem("jwt") !== null) {
    return (
        <>
          <Link href="/my" className="text-white hover:text-gray-300">
            내 정보
          </Link>
        </>
    );
  } else {
    return (
        <>
          <Link href="/login" className="text-white hover:text-gray-300">
            로그인
          </Link>
        </>
    );
  }
}
const TopNavigator = () => {
  return (
      <nav className="top-0 z-10 fixed bg-brand-primary-500 p-4 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 로고 또는 홈 버튼 */}
          <Link href="/" className="text-white text-lg font-bold">
            HearUR
          </Link>

          {/* 탭 목록 */}
          <div className="flex space-x-4 mr-3">
            <NavLink href="/health-information">건강정보</NavLink>
            <NavLink href="/self-diagnosis">자가진단</NavLink>
            <NavLink href="/community">커뮤니티</NavLink>
            <NavLink href="/experience-notice">체험단</NavLink>
            <LoginButton/>
          </div>
        </div>
      </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
  return (
      <Link href={href} className="text-white hover:text-gray-300">
        {children}
      </Link>
  );
};

export default TopNavigator;