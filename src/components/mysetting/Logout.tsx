"use client";
import {useRouter} from "next/navigation";
import {useAuth} from "@/utils/context/authContext";

const Logout = () => {
  const {logout} = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  }
  return (
      <div className={"m-3"}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>로그아웃</button>
      </div>
  );
}

export default Logout;
