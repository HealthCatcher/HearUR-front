'use client';

import {createContext, useContext, ReactNode, useState, useEffect, useCallback} from 'react';

// 사용자 타입 정의
export type User = {
  jwt: string;
};

// 컨텍스트 상태 타입 정의
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  loading: boolean;
};

// 기본값 설정
const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

// AuthContext 생성
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// AuthProvider 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setUser({ jwt });
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback((userData: User) => {
    setUser(userData);
    localStorage.setItem('jwt', userData.jwt);
    setLoading(false);
  },[]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('jwt');
  },[]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// AuthContext 사용 훅
export function useAuth() {
  return useContext(AuthContext);
}
