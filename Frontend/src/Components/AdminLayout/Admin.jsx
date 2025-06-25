import './admin.css';
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AdminLayout = ({ children, heading }) => {
  const Navigate = useNavigate();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const onLogout = () => {
    localStorage.removeItem('ID');
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ROLE');
    Navigate('/admin/login');
  };

  const SidebarContent = () => (
    <>
      <h5 style={{ padding: '5px' }}>Pages</h5>
      <Button onClick={() => Navigate('/admin/Home')} className="buttons">
        <i className="fa-solid fa-house"></i> Home
      </Button>
      <Button onClick={() => Navigate('/admin/ListProduct')} className="buttons">
        <i className="fa-brands fa-product-hunt"></i> Products
      </Button>
      <Button onClick={() => Navigate('/admin/Profile')} className="buttons">
        <i className="fa-solid fa-user"></i> Profile
      </Button>
      <Button onClick={() => Navigate('/admin/Order')} className="buttons">
        <i className="fa-solid fa-box"></i> Orders
      </Button>
      <h5 style={{ padding: '5px' }}>Others</h5>
      <Button className="buttons">
        <i className="fa-solid fa-gear"></i> Settings
      </Button>
      <Button onClick={onLogout} className="buttons">
        <i className="fa-solid fa-right-from-bracket"></i> Logout
      </Button>
    </>
  );

  return (
    <div className="admin-container">
      <div className="nav">
        <p>GeekyStore</p>
        <p>AdminPanel</p>
        <div className="nav-icons">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-bars menu-toggle" onClick={() => setIsDrawerVisible(true)}></i>
        </div>
      </div>

      <div className="center">
        {/* Desktop Sidebar */}
        <div className="sidebar desktop-only">
          <SidebarContent />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          placement="left"
          onClose={() => setIsDrawerVisible(false)}
          open={isDrawerVisible}
          title="Menu"
          className="mobile-only"
        >
          <SidebarContent />
        </Drawer>

        <div className="contents">
          <h2 style={{ paddingLeft: '10px', textAlign: 'center' }}>{heading}</h2>
          <div className="contents2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
