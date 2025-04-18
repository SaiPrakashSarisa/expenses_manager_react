import {Outlet} from 'react-router-dom';
import { useState } from 'react';
import './layout.css';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Drawer } from 'antd';

const Layout = () => {

  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

    return (
        <div className="layout-container">
          <div className="header-container">
            <Header onMenuClick={() => setOpen(!open)}/>
          </div>
          <div className="layout-body">
            <Outlet />
          </div>
          <Drawer
            title="Money Manager"
            placement="left"
            onClose={closeDrawer}
            open={open}
            closable={false}
            width="15%"
            className='sidebar-drawer'
          >
          <SideBar />
          </Drawer>
      </div>
    )
}

export default Layout;