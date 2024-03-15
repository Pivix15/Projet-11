import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios'


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
        console.log(credentials)
        axios.post('http://localhost:3001/api/v1/user/login', credentials)
        .then(res => {
            console.log(res)
            navigate('/admin')
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
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <button className="sign-in-button">Sign In</button>
                    {/* <Link to='/admin/user/index' className="sign-in-button">Sign In</Link> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
                    {/* <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default Sign;