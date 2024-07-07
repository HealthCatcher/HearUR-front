import Logout from "@/app/my/Logout";
import NickName from "@/app/my/NickName";
import NewPassword from "@/app/my/NewPassword";
import IsLoggedIn from "@/app/my/IsLoggedIn";

export const metadata = {
  title: "HearUR | 내 정보",
};

const Page = () => {

  return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <IsLoggedIn/>
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-4xl font-bold mb-4">내 정보</h1>
          <Logout/>
          <NewPassword/>
          <NickName/>
        </div>
      </div>
  );
}

export default Page;