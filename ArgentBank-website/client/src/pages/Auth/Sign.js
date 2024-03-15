import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sign = () => {

    const [credentials, setCredentials] = useState({
        login: 'marcel',
        password: 'roger'
    })

    const onChange = (e) => {
        console.log(e.target.value)
        setCredentials({
            ...credentials, //sort l'état précédent
            [e.target.name]: e.target.value
        })
    }

    const onSubmite = (e) => {
        e.preventDefault()
        console.log(credentials)
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i> {/* Faut changer l'icon */}
                <h1>Sign In</h1>
                <form onSubmit={onSubmite}>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" value={credentials.username} onChange={onChange} />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <Link to='/admin/user/index' className="sign-in-button">Sign In</Link>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
                    {/* <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default Sign;