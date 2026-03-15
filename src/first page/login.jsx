import React, { useState } from 'react'
import login from '../assets/gym-login.jpg'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const Login = () => {
    var [data, setdata] = useState({ email: "", password: "" })
    var nav = useNavigate()

    var handlesubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            nav('/n')
        } catch (err) {
            alert("Invalid email or password")
        }
        setdata({ email: "", password: "" })
    }

    var handleinput = (e) => {
        var { name, value } = e.target
        setdata((val) => ({ ...val, [name]: value }))
    }

    return (
        <div className='login-container' >
            <img src={login} alt="" className='login-img' />
            <div></div>
            <div className='login-card'>
                <div className='login-card-nav'>
                    <div><p className="login-circle"></p></div>
                    <hr className='h1r' />
                    <div><p>Beast Force</p><p>Gym</p></div>
                </div>
                <p className='login-tittle'>Login</p>
                <p className='login-underline'></p>
                <div>
                    <form action="" className='form' onSubmit={handlesubmit}>
                        <input type="email" className='login-input' placeholder='Email' name='email' onInput={handleinput} required />
                        <input type="password" className='login-input' placeholder='password' name='password' onInput={handleinput} required />
                        <Link to={'/forgetpass'}><p className='login-forget'>Forget Password ?</p></Link>
                        <button className='login-btn'>Login</button>
                        <div className='or'><hr className='hr9' />or<hr className='hr9' /></div>
                        <Link to={'/signup'}><button className='sign-up'>Sing Up</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
