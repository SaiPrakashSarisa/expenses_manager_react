import { Link } from "react-router-dom"
import { SettingOutlined, ProductOutlined, DollarOutlined } from '@ant-design/icons';
import { FaWallet } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { Space } from 'antd';

const SideBar = () => { 

    const navList = [
        {'title': 'Dashboard', path: '/dashboard', icon: <ProductOutlined />},
        {'title': 'Transactions', path: '/transactions', icon: <DollarOutlined />},
        {'title': 'Assets', path: '/transactions', icon: <FaWallet />},
        // {'title': 'Investments', path: '/transactions', icon: <BsGraphUpArrow />},
    ]
    return (
        <div className="sidebar-container">
            <div className='nav-items'>
                {navList.map((item, index) => {
                    return (
                        <div >
                            <Link className="nav-item" to={item.path} key={index}>
                                <div className="item">
                                    <span className="settings-icon">{item.icon}</span>
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className='nav-settings'>
                <Space className="settings-icon">
                    <SettingOutlined />
                </Space>
                <span>Settings</span>
            </div>
        </div>
    )
 }

 export default SideBar;