"use client";
import {useEffect} from "react";
import getAuthorization from "@/app/(home)/getAuthorization";
import {useTheme} from "@/components/theme-provider";
const AuthComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useTheme();
  useEffect(() => {
    console.log('AuthComponent');
    getAuthorization(setIsLoggedIn);
  }, [setIsLoggedIn]);

  return null; // 렌더링할 UI가 없으므로 null 반환
};

export default AuthComponent;