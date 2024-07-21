"use client";
import React, {useState} from "react";
import addComment from "@/utils/api/post/addComment";

interface InputCommentProps {
  postNo: number;
}

const InputComment: React.FC<InputCommentProps> = ({postNo}) => {
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment(postNo, newComment);
    setNewComment('');
    window.location.reload();
  };
  return (
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력하세요"
            className="w-full p-2 border rounded-lg mb-2"
        />
        <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          댓글 작성
        </button>
      </form>
  )
}

export default InputComment;