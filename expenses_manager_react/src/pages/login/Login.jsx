import './login.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="title-form-container">
                <h1 className="title-text">Money Manager</h1>
                <div className="login-form-container">
                    {/* <h2 className="form-title">Login</h2>
                    <div></div> */}
                    <Button type="primary" onClick={()=>{navigate('/dashboard')}}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;