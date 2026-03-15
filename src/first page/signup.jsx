import React, { useState } from 'react'
import './resetpass.css'
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/gym-login.jpg'
import './signup.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const Signup = () => {
    var [inputdata, setinputdata] = useState({ email: '', password: '' })
    var nav = useNavigate()

    var handleinput = (e) => {
        var { name, value } = e.target
        setinputdata((prev) => ({ ...prev, [name]: value }))
    }

    var handlesubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, inputdata.email, inputdata.password)
            nav('/login')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className='signup-container'>
            <img src={login} alt="" className='signup-img' />
            <div className='reset-card'>
                <div className='login-card-nav'>
                    <div><p className="login-circle"></p></div>
                    <hr className='h1r' />
                    <div><p>Beast Force</p><p>Gym</p></div>
                </div>
                <div className='reset-detail'>
                    <p className="reset-tittle">Sign up</p>
                    <form action="" className='form1' onSubmit={handlesubmit}>
                        <input type="email" className="reset-input" name='email' onInput={handleinput} placeholder='Email' required />
                        <input type="password" className="reset-input1" name='password' onInput={handleinput} placeholder='Password' required />
                        <button className="reset-btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
