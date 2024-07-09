const ExamplePost = () => {
  return (
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">예시 글입니다.</h2>
          <p className="text-sm text-gray-600 mb-2">
            작성자: <span className="font-medium">운영자</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            작성일: <span className="font-medium">2024-07-09 13:14</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            수정일: <span className="font-medium">2024-07-09 13:20</span>
            <span className="text-xs text-red-500"> (수정됨)</span>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            카테고리: <span className="font-medium">질문 게시판</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">예시예시예시내용내용내용내용내용내용</p>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">댓글</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow mb-4">
              <p className="text-sm text-gray-600 mb-2">
                작성자: <span className="font-medium">운영자2</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                작성일: <span className="font-medium">2024-07-09 13:40</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="text-xs text-red-500"> (수정됨)</span>
              </p>
              <p className="text-gray-700 leading-relaxed">댓글이에용</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow mb-4">
              <p className="text-sm text-gray-600 mb-2">
                작성자: <span className="font-medium">운영자3</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                작성일: <span className="font-medium">2024-07-09 13:45</span>
              </p>
              <p className="text-gray-700 leading-relaxed">두번째 댓글이에용</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ExamplePost;