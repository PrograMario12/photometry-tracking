import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login: React.FC = () => {
    const { login } = useAuth();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/');
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Login;