"use client";
import removeComment from "@/utils/api/post/removeComment";
import React from "react";

interface RemoveCommentButtonProps {
  commentId: string;
}
const RemoveCommentButton:React.FC<RemoveCommentButtonProps> = ({commentId}) => {
  function handleDeleteComment() {
    removeComment(commentId)
  }

  return (
      <button
          onClick={() => handleDeleteComment()}
          className="text-red-500 text-sm"
      >
        삭제
      </button>
  )
}

export default RemoveCommentButton;