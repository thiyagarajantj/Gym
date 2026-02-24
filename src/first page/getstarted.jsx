import React from 'react'
import getstart from '../assets/gym-getstared.jpg'
import './getstarted.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

export const Getstarted = ()=>{
  return (
  <div className='get-container'>
        <img src={getstart} alt="" className='get-started' />
      <div className='get-nav'>
        <p className='circle'></p>
        <p>Beast Fources</p>
      </div>
    <div className='get-box1'>
        <p className="gs-tittle">Get Ready</p>
        <p className='gs-p1'>Shape Your body</p>
        <p className='gs-p2'>"The harder you work and the more prepared you are for something, you're-going to be able to persevere through anything. "</p>
        <Link to={'/login'}><button className='gs-btn'>Get Started</button></Link>
    </div>
    <div className='get-fotter'>
      <p className='get-icon'><FacebookOutlinedIcon className='ic'/></p>
      <p className='get-icon'><GoogleIcon className='ic'/></p>
      <p className='get-icon'><InstagramIcon className='ic'/></p>
      <p className='get-icon'><WhatsAppIcon className='ic'/></p>
    </div>
    </div>
  )
}
