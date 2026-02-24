import React from 'react'
import  { Routes,Route }  from "react-router-dom"
import { Getstarted } from '../first page/getstarted'
import { Login } from '../first page/login'
import { Forgetpass } from '../first page/forgetpass'
import { Resetpass } from '../first page/resetpass'
import SideNav from './dashboard/dashboard'
import { Dfirst } from './dashboard/dfirst'
import { Newregister } from './dashboard/newregister'
import { Viewregisted } from './dashboard/Viewregisted'
import { Payment } from './dashboard/payment'
import { Shortlist } from './dashboard/shortlist'
import { Signup } from '../first page/signup'


export const Mainrouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Getstarted/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgetpass' element={<Forgetpass/>}/>
            <Route path='/resetpass' element={<Resetpass/>}/> 
            <Route path='/dashboard' element={<SideNav/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route element={<SideNav/>}>
              <Route path='/n' element={<Dfirst/>}/>
              <Route path='/new' element={<Newregister/>}/>
              <Route path='/viewregist' element={<Viewregisted/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/shortlist' element={<Shortlist/>}/>
            </Route>
            
        </Routes>
    </div>
  )
}
