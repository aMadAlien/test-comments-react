import React, { useState, useEffect } from 'react';
import { CommentListWrapper } from '../../styles/CommentListStyles';
import axiosInstance from '../../config/axios';
import CommentItem from './CommentItem';

function CommentList() {
  const [comments, setComments] = useState([]);

  console.log(comments);
  useEffect(() => {
    axiosInstance.get('/comments')
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  return (
    <CommentListWrapper>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </CommentListWrapper>
  );
}

export default CommentList;
