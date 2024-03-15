import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '@/_services/account.service';

const Sign = () => {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: 'tony@stark.com',
        password: 'password123'
    })

    const onChange = (e) => {
        console.log(e.target.value)
        setCredentials({
            ...credentials, //sort l'état précédent
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
        .then(res => {
            console.log(res)
            accountService.saveToken(res.data.body.token)
            navigate('/admin/user/index')
        })
        .catch(error => console.log(error))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i> {/* Faut changer l'icon */}
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="email" value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Sign;