import { useState } from 'react';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header">
      <div className="logo">Logo Here</div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
