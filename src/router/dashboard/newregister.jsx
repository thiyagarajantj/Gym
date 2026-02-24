import React, { useState } from 'react'
import getstart from '../../assets/gym-getstared.jpg';
import './newregister.css' 
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import { url } from './dfirst';
import axios from 'axios';
import { input } from './newregisterdata';


export const Newregister = () => {
    var nav=useNavigate()
    var [state,setstate]=useState({
    })

    var handleinput=(e)=>{
        var value = e.target.value 
        var name = e.target.name
        setstate((val)=>({...val,[name]:value}))
    }
    var handlesubmit=async (e)=>{
        e.preventDefault()
        await axios.post(url,state)
        alert('registed Sucessfully')
        nav('/n')
    }
  return (
    <div className='new-container'>
        <img src={getstart} alt="" className='new-rigister-img'/>
        <div className='new-content'>
            <div className='back' onClick={()=>nav(-1)} >
                <p><ArrowBackIcon/></p><p>Back</p>
            </div>
            <p className='new-tittle'>Registration form</p>
            <p className='new-line'></p>
            <div className='form-container'>
                <div >
                    <form action="" className='form11' onSubmit={handlesubmit}>
                        {
                            input.map((val,)=>(
                                <div className='form111'>
                                <input type={val.type} name={val.name} placeholder={val.placeholder} onInput={handleinput}  className='i222'required/>
                                </div>
                            ))
                        }
                    
                    <input type="text" placeholder='Membership Duration' className='i222' required/>
                    <div className='checkbox'>
                        <div className='check'>
                        <input type="checkbox" id='i2' />
                        <label htmlFor="" for="i2">Trainer</label>
                        </div>
                        <div className='check'>
                            <input type="checkbox" id='i'/>
                            <label htmlFor="" for='i'>Personal Trainer</label>
                        </div>
                    </div>
                    <input type="text" placeholder='Payment Mode' className='i222'required />
                    <button className='new-btn'>Submit</button>
                    </form>
                </div>
                <div className='form21'>
                    <div className='takephoto'>
                        <p className='photo-icon'><PhotoCameraIcon/></p>
                    </div>
                    <button className='photo-btn'>Take Photo</button>
                </div>
            </div>
        </div>
    </div>
  )
}
