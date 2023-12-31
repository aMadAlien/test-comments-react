// CommentListStyles.js

import styled from 'styled-components';

export const CommentListWrapper = styled.div`
  margin-top: 20px;
`;

export const CommentWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const CommentText = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const RepliesWrapper = styled.div`
  margin-left: 20px;
`;

export const TextModal = styled.div`
  /* Styles for the modal can be defined here */
  /* You can use a library like react-modal to create a modal */
`;

export const OpenTextFileButton = styled.button`
  /* Styles for the "Open Text File" button */
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const SortButton = styled.button`
  padding: 8px 12px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
