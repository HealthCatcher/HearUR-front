"use client";
import styled from 'styled-components';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const NavigatorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0f0f0;
    height: 60px;
`;

const NavButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ddd;
    }
`;

const BottomNavigator = () => {
  const path = usePathname();

  return (
      <div>
        <NavigatorContainer>
          <Link href={"/health-information"}><NavButton>건강정보</NavButton></Link>
          <Link href={"/self-diagnosis"}><NavButton>자가진단</NavButton></Link>
          <Link href={"/experience-notice"}><NavButton>체험단</NavButton></Link>
          <Link href={"/community"}><NavButton>커뮤니티</NavButton></Link>
          <Link href={"/my"}><NavButton>내정보</NavButton></Link>
        </NavigatorContainer>
      </div>
  );

};

export default BottomNavigator;