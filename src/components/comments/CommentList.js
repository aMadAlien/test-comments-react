import React, { useState, useEffect } from 'react';
import { CommentListWrapper, SortButton } from '../../styles/CommentListStyles';
import axiosInstance from '../../config/axios';
import CommentItem from './CommentItem';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [sorting, setSorting] = useState({
    username: false,
    email: false,
    date: false
  });

  const getComments = (sortBy = 'created_at') => {
    setSorting({ ...sorting, sortBy: !sorting.sortBy });

    axiosInstance.get('/comments?sort='+sortBy + (sorting.sortBy ? '-asc' : '-desc'))
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }

  useEffect(() => getComments(), []);

  return (
    <CommentListWrapper>
      <div>
        Sort by:
        <SortButton onClick={() => getComments('name')}>Username</SortButton>
        <SortButton onClick={() => getComments('email')}>Email</SortButton>
        <SortButton onClick={() => getComments('created_at')}>date</SortButton>
      </div>

      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </CommentListWrapper>
  );
}

export default CommentList;
