const CommunityPage = () => {
  return (
      <>
        <div>
          <h1>Community Page</h1>
          <section className={"community-cover"}>
            <div className={"cover-content"}>
              <h1 className={"text-4xl font-bold"}>커뮤니티</h1>
              <p className={"text-lg"}>사람들과 소통하고 정보를 공유해보세요.</p>
            </div>
            <span className={"cover-description"}>
              여러 건강 정보를 서로 나누어 보세요.
            </span>
          </section>
          <section className={"community-post-list"}>
            <div className={"post-list-header"}>
              <h2>최신 글</h2>
              <button className={"post-write-button"}>글쓰기</button>
            </div>
          </section>
        </div>
      </>
  );
}

export default CommunityPage;