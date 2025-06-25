import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = key => {
    if (key === 'admin') {
      navigate('/admin/Login');
    } else if (key === 'logout') {
      localStorage.removeItem('ID');
      localStorage.removeItem('TOKEN');
      localStorage.removeItem('ROLE');
      navigate('/');
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/user/Home')}>
          Geeky <span className="highlight">Store</span>
        </div>

        <div className="navbar-menu">
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/user/shop')}>Shop</a>
          <a onClick={() => navigate('/user/about')}>About Us</a>
          <a onClick={() => navigate('/user/customer')}>Customer Service</a>
          <a onClick={() => navigate('/user/OrdersPage')}>Orders</a>
        </div>

        <div className="navbar-right">
          <div className="navbar-profile">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <div className="navbar-profile-dropdown">
              <p onClick={() => handleMenuClick('admin')}>Admin Login</p>
              <p onClick={() => handleMenuClick('logout')}>Logout</p>
            </div>
          </div>

          <div className="navbar-cart" onClick={() => navigate('/user/cart')}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {/* Optional: Uncomment if showing cart badge */}
            {/* <div className="navbar-cart-badge">2</div> */}
          </div>

          <div className="navbar-mobile-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="navbar-sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div className={`navbar-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="navbar-sidebar-header">
          <span>Menu</span>
          <FontAwesomeIcon icon={faTimes} onClick={toggleSidebar} />
        </div>
        <div className="navbar-sidebar-links">
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/user/shop')}>Shop</a>
          <a onClick={() => navigate('/user/about')}>About Us</a>
          <a onClick={() => navigate('/user/customer')}>Customer Service</a>
          <a onClick={() => navigate('/user/OrdersPage')}>Orders</a>
          <a onClick={() => handleMenuClick('admin')}>Admin Login</a>
          <a onClick={() => handleMenuClick('logout')}>Logout</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
