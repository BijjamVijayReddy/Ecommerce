import React, { useState } from 'react';
import "./Login.css";
import logo from "../../assests/logo.png"

const eyeSvg = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
);

const eyeClose = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>

)


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };



    return (
        <div className='login-container'>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='Login-shift'>LOG IN TO SHIFT CART</h1>
            <p className='Login-shift1'>WELCOME BACK PLEASE LOG IN TO CONTINUE</p>
            <br />
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label>Email Address</label>
                    <input className='input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="JOHN.DOE@COMPANY.COM"
                        required
                    />
                </div>
                <div className="input-group password-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*******************"
                        required
                    />
                    <span className="password-toggle" onClick={handlePasswordToggle}>
                        {showPassword ? eyeClose : eyeSvg}
                    </span>
                    <br /><br />
                </div>
                <p className='signupnow'>DON'T HAVE AN ACCOUNT?<a className='signup' href="#">SIGN UP NOW?!</a></p>
                <br />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>


    )
}

export default Login

