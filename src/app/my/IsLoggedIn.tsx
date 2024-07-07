"use client";
import {useRouter} from "next/navigation";

const IsLoggedIn = () => {
  const router = useRouter();
  if(localStorage.getItem("jwt") === null) router.push("/login")
  return null;
}

export default IsLoggedIn;