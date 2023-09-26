import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const PaginationItem = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;

  .active {
    background-color: #007bff;
    border: 1px solid #007bff;
    color: #fff;
  }
`;

export const PaginationLink = styled.button`
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
`;
