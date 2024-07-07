"use client";
import {useTheme} from "@/components/theme-provider"
import {useRouter} from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const {setIsLoggedIn} = useTheme();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    router.push("/");
  }
  return (
      <div className={"m-3"}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>로그아웃</button>
      </div>
  );
}

export default Logout;
