import React from 'react'
import './dashnav.css'
import ViewListIcon from '@mui/icons-material/ViewList';

export const Dashnav = ({menu}) => {
  return (
    <div>
    <div className='dash-nav-container'>
        <button className='navbar'onClick={menu} ><ViewListIcon/></button>
        <p className="nav-circle"></p>
        <p className='nav-content'>Best Forces</p>
    </div>
    <div>
        
    </div>
    </div>
  )
}
