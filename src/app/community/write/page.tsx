import WritePost from "@/app/community/write/WritePost";

export const metadata = {
  title: "HearUR | 글쓰기",
};

const WritePage = () => {


  return (
      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-2xl font-bold mb-4">글쓰기</h1>
        <WritePost/>
      </div>
  );
}

export default WritePage;