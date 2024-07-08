import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  const status = useOnlineStatus();

  // Selector to Get Cart Items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="border p-4 bg-orange-200 shadow-lg flex justify-between align-middle">
      <div className="w-28">
        <img src={logo}></img>
      </div>
      <ul className="flex items-center">
        <li className="px-3">Online Status {status ? '🟢' : '🔴'}</li>
        <li className="px-3">
          <Link to={'/about'}>About Us</Link>
        </li>
        <li className="px-3">
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li className="px-3">
          <Link to={'/cart'}>Cart ({cartItems.length})</Link>
        </li>
        <li className="px-3">
          <button
            className="login-btn"
            onClick={() => {
              setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {loginBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
