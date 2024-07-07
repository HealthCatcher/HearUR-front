"use client";
import {useTheme} from "@/components/theme-provider"
import {useRouter} from "next/navigation";

const logout = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useTheme();
  const handleLogout = () => {
      localStorage.removeItem("jwt");
      setIsLoggedIn(false);
      router.push("/");
    }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default logout;
