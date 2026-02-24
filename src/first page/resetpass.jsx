import React, { useState } from 'react';
import './resetpass.css';
import { useNavigate, useLocation } from 'react-router-dom';
import login from '../assets/gym-login.jpg';
import { url2 } from './login';
import axios from 'axios';

export const Resetpass = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location?.state?.emaildata?.email; // safe access
    console.log("Email from state:", email);

    const [inputData, setInputData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleReset = (e) => {
        const { name, value } = e.target;
        setInputData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { password, confirmPassword } = inputData;

        if (!password || !confirmPassword) {
            alert("Please fill both password fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            await axios.put(`${url2}/${email}, ${ password }`);
            alert("Password reset successful!");
            navigate('/login');
        } catch (error) {
            console.error("Reset error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className='reset-container'>
            <img src={login} alt="" className='reset-img' />
            <div className='reset-card'>
                <div className='login-card-nav'>
                    <div><p className="login-circle"></p></div>
                    <hr className='h1r' />
                    <div>
                        <p>Beast Force</p>
                        <p>Gym</p>
                    </div>
                </div>
                <div className='reset-detail'>
                    <p className="reset-tittle">Reset Password</p>
                    <p className="red-tittle">Enter your new password below, we are just being extra safe</p>
                    <form className='form1' onSubmit={handleSubmit}>
                        <input
                            type="password"
                            className="reset-input"
                            placeholder='Password'
                            name='password'
                            value={inputData.password}
                            onChange={handleReset}
                            required
                        />
                        <input
                            type="password"
                            className="reset-input1"
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            value={inputData.confirmPassword}
                            onChange={handleReset}
                            required
                        />
                        <button className="reset-btn" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};