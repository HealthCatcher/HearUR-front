import Link from "next/link";

const CommunityPage = () => {
  return (
      <>
        <div>
          <h1>Community Page</h1>
          <section className={"community-cover bg-amber-200 pt-8 pb-10 pl-10"}>
            <div className={"cover-content"}>
              <h1 className={"text-4xl font-bold pb-10"}>커뮤니티</h1>
              <p className={"text-lg"}>사람들과 소통하고 정보를 공유해보세요.</p>
            </div>
            <span className={"cover-description"}>
              여러 건강 정보를 서로 나누어 보세요.
            </span>
          </section>
          <section className={"community-post-list"}>
            <div className={"post-list-header flex justify-between items-center post-list-header ml-10 mr-5 mt-2 mb-2"}>
              <div className={"text-lg font-bold"}>최신 글</div>
              <Link className={"post-write-button text-black px-4 py-2 rounded hover:bg-blue-200 border"} href={"/community/write"}>글쓰기</Link>
            </div>
          </section>
        </div>
      </>
  );
}

export default CommunityPage;