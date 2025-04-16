import { Link } from "react-router-dom"
import { SettingOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const SideBar = () => { 

    const navList = [
        {'title': 'Dashboard', path: '/dashboard'},
        {'title': 'Transactions', path: '/transactions'}
    ]
    return (
        <div className="sidebar-container">
            <div className='nav-items'>
                {navList.map((item, index) => {
                    return (
                        <div >
                            <Link className="nav-item" to={item.path} key={index}>
                                <div className="item">
                                    <span>😀</span>
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