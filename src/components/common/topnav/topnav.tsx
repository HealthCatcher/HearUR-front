import Link from "next/link";
import React from "react";

const TopNavigator = () => {
  return(
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 로고 또는 홈 버튼 */}
          <Link href="/" className="text-white text-lg font-bold">
            HearUR
          </Link>

          {/* 탭 목록 */}
          <div className="flex space-x-4">
            <NavLink href="/health-information">건강정보</NavLink>
            <NavLink href="/self-diagnosis">자가진단</NavLink>
            <NavLink href="/community">커뮤니티</NavLink>
            <NavLink href="/experience-notice">체험단</NavLink>
            <NavLink href="/settings">설정</NavLink>
          </div>
        </div>
      </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink : React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-white hover:text-gray-300">
      {children}
    </Link>
  );
};

export default TopNavigator;