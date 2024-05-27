import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState('Login');

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login Function Executed!", formData);
        let resData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json()).then((data) => resData=data);
        if(resData.success) {
            if(formData.email === "admin_master@gmail.com") {
                alert("Login to Admin Account!");
                window.location.replace("http://127.0.0.1:5173/");
            } else {
                localStorage.setItem('auth-token', resData.token);
                window.location.replace("/")
            }
        }
        else {
            alert(resData.errors)
        }
    }

    const signup = async () => {
        console.log("Signup Function Executed!", formData);
        let resData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json()).then((data) => resData=data);
        if(resData.success) {
            localStorage.setItem('auth-token', resData.token);
            window.location.replace("/")
        }
        else {
            alert(resData.errors)
        }
    }

    return (
        <div className='login-signup'>
            <div className='login-signup-container'>
                <h1>{state}</h1>
                <div className='login-signup-fields'>
                    {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Name' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Adress' />
                    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
                </div>
                <button onClick={() => {
                    state==="Login"?login():signup()
                }}>Continue</button>
                {state==="Sign Up"
                ?<p className='login'>Already have an account? <span onClick={() => {setState("Login")}}>Login here</span></p>
                :<p className='login'>Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>}
                <div className='agree'>
                    <input type='checkbox' name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup