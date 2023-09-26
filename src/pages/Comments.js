import { useState } from "react";
import CommentForm from "../components/comments/CommentForm"
import CommentList from "../components/comments/CommentList"

function CommentsPage() {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <CommentForm comments={comments} setComments={setComments} />

      <CommentList comments={comments} setComments={setComments} />
    </div>
  )
}

export default CommentsPage