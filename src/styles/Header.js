import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 10px;
  }

  a, button {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;