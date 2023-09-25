import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Nav } from '../styles/Header';
import axiosInstance from '../config/axios';

function Header() {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const logout = () => {
    axiosInstance.post("/auth/logout")
    .then(res => {
      localStorage.clear();
    })
    .catch(e => console.error(e))
    navigate("/login");
  }

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          {token ? 
            <Fragment>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </Fragment>
          :
            <Fragment>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </Fragment>
          }
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
