import { useState } from 'react';
import login from '../assets/gym-login.jpg';
import { Link, useNavigate } from 'react-router-dom';

import './forgetpass.css';

export const Forgetpass = () => {
    const [state, setState] = useState(true);
    const navigate = useNavigate();
    const [emaildata, setEmailData] = useState({ email: '' });

    const handleForget = (e) => {
        e.preventDefault();
        setState(false); // Show OTP form
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailData({ [name]: value });
    };

    const handleOtp = (e) => {
        e.preventDefault();
        navigate('/resetpass', { state: { emaildata } });
    };

    return (
        <div className='forget-container'>
            <img src={login} alt="" className='forget-img' />
            <div className='forget-card'>
                <div className='login-card-nav'>
                    <div>
                        <p className="login-circle"></p>
                    </div>
                    <hr className='h1r' />
                    <div>
                        <p>Beast Force</p>
                        <p>Gym</p>
                    </div>
                </div>

                {
                    state === false ? (
                        <form className='otp-cont' onSubmit={handleOtp}>
                            <p className='otp-tittle'>Enter Your OTP</p>
                            <div className='otp-input-group'>
                                <input type="text" maxLength={1} className='otp-input' />
                                <input type="text" maxLength={1} className='otp-input' />
                                <input type="text" maxLength={1} className='otp-input' />
                                <input type="text" maxLength={1} className='otp-input' />
                            </div>
                            <button className='otp-btn'>Send</button>
                            <p className='otp-resend'>Resend the OTP</p>
                        </form>
                    ) : (
                        <form className='forget-detail' onSubmit={handleForget}>
                            <p className='forget-tittle'>Forget Your Password ?</p>
                            <p className="forget-red-tittle">Enter your Email below to receive your OTP</p>
                            <input
                                type="email"
                                placeholder='Email'
                                name='email'
                                className='forget-input'
                                required
                                value={emaildata.email}
                                onChange={handleInputChange}
                            />
                            <button className='forget-btn'>Send</button>
                        </form>
                    )
                }
            </div>
        </div>
    );
};