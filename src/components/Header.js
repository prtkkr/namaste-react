import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header">
      <div className="logo">Logo Here</div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
