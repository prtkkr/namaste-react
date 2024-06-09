import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import logo from '../../images/logo.jpeg';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const status = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img style={{ width: '100px' }} src={logo}></img>
      </div>
      <div className="nav-links">
        <ul>
          <li>Online Status {status ? '🟢' : '🔴'}</li>
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
