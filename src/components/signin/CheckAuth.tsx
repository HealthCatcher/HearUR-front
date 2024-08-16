'use client';

import { useEffect } from 'react';
import retrieveJwt from '@/utils/api/user/retrieveJwt';
import { useAuth } from '@/utils/context/authContext';

const CheckAuth = () => {
  const { user,login } = useAuth();

  useEffect(() => {
    console.log('CheckAuth');
    retrieveJwt().then((jwt) => {
      if (jwt) {
        login({ jwt });
      }
    });
  }, []);

  return null; // 렌더링할 UI가 없으므로 null 반환
};

export default CheckAuth;