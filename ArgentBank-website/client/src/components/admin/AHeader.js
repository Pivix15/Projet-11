import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { accountService } from '@/_services/account.service';

const AHeader = () => {
    let navigate = useNavigate()

    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/home'>
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to='/sign'>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                <button onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};

export default AHeader;