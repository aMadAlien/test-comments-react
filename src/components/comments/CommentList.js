import React, { useState, useEffect } from 'react';
import { CommentListWrapper, SortButton } from '../../styles/CommentListStyles';
import axiosInstance from '../../config/axios';
import CommentItem from './CommentItem';
import Pagination from '../Pagination';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [pages, setPages] = useState({
    totalPages: 0,
    currentPage: 1
  });
  const [sorting, setSorting] = useState({
    username: false,
    email: false,
    date: false
  });

  const sortComments = (sortBy) => {
    const sortingOrder = !sorting.sortBy ? '-asc' : '-desc';
    getComments(1, sortBy + sortingOrder)
    setSorting({ ...sorting, sortBy: !sorting.sortBy });
  }

  const getComments = (page = 1, sortBy = 'created_at-desc') => {
    page = page ?? pages.currentPage;

    axiosInstance.get(`/comments?page=${page}&sort=${sortBy}`)
      .then((response) => {
        setPages({
          totalPages: response.data.totalPages,
          currentPage: response.data.currentPage
        });
        setComments(response.data.comments)
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }

  useEffect(() => getComments(), []);

  return (
    <CommentListWrapper>
      <div>
        Sort by:
        <SortButton onClick={() => sortComments('name')}>Username</SortButton>
        <SortButton onClick={() => sortComments('email')}>Email</SortButton>
        <SortButton onClick={() => sortComments('created_at')}>date</SortButton>
      </div>

      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      <Pagination currentPage={pages.currentPage} totalPages={pages.totalPages} onPageChange={getComments} />
    </CommentListWrapper>
  );
}

export default CommentList;
