import Link from "next/link";

const newPassword = () => {
  return (
      <div className={"m-3"}>
        <h1 className="text-2xl font-bold mb-4">비밀번호 재설정</h1>
        <Link href="/my/password">
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            비밀번호 재설정
          </button>
        </Link>
      </div>
  );
}

export default newPassword;