import {MenuOutlined, UserOutlined} from '@ant-design/icons'
import { Space } from 'antd';

const Header = ({onMenuClick}) => { 
    return (
        <div className="header">
            <div className="header-title">
                <Space>
                <MenuOutlined onClick={onMenuClick} className="menu-icon" />
                </Space>

                <p className="app-title"> Money Manager</p>

            </div>
            <div className="profile-icon">
            <UserOutlined />
            </div>

        </div>
    )
}

export default Header;