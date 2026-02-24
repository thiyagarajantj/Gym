import React, { useState, useEffect } from 'react'
import login from '../assets/gym-login.jpg'
import './login.css'
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom';
import SideNav from '../router/dashboard/dashboard';
import axios from 'axios';

export var url2 = "http://localhost:3000/user"
export const Login = () => {
    var [data, setdata] = useState({email:"",password:""})
    var [data2, setdata2] = useState([])

    var api2 = async () => {
        var value = await axios.get(url2)
        await setdata2(value.data)
    }
    useEffect(() => {
        api2();
    }, []);

    var nav = useNavigate()


    var handlesubmit = async (e) => {
        e.preventDefault()
        await api2()
        var response = data2.find((val) => val.email == data.email && val.password == data.password)
        console.log(data);
        console.log(data2);

        if (response) {
            nav('/n')
        }
        else {
            alert("invalid email or  password")
        }
        setdata({email:"",password:""})
    }

    var handleinput = (e) => {
        var value = e.target.value
        var name = e.target.name

        setdata((val) => ({ ...val, [name]: value }))
    }
    return (
        <div className='login-container' >
            <img src={login} alt="" className='login-img' />
            <div></div>
            <div className='login-card'>
                
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
                <p className='login-tittle'>Login</p>
                <p className='login-underline'></p>
                <div >
                    <form action="" className='form' onSubmit={handlesubmit}>
                        <input type="email" className='login-input' placeholder='Email' name='email' onInput={handleinput} required />
                        <input type="password" className='login-input' placeholder='password' name='password' onInput={handleinput} required />
                        <Link to={'/forgetpass'}><p className='login-forget'>Forget Password ?</p></Link>
                        <button className='login-btn'>Login</button>
                        <div className='or'><hr className='hr9'/>or<hr className='hr9'/></div>
                        <Link to={'/signup'}><button className='sign-up'>Sing Up</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}