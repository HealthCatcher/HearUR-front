"use client";
import {useRouter} from "next/navigation";

const IsLoggedIn = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt') === null) {
      //router.push('/signin');
    }
  }
  return null;
}

export default IsLoggedIn;