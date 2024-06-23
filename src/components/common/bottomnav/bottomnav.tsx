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
    <NavigatorContainer>
      <NavButton><Link href={"/health-information"}>건강정보</Link></NavButton>
      <NavButton><Link href={"/self-diagnosis"}>자가진단</Link></NavButton>
      <NavButton><Link href={"/experience-notice"}>체험단</Link></NavButton>
      <NavButton><Link href={"/community"}>커뮤니티</Link></NavButton>
      <NavButton><Link href={"/my"}>내정보</Link></NavButton>
    </NavigatorContainer>
  );
};

export default BottomNavigator;