import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Getstarted } from './first page/getstarted'
import { Login } from './first page/login'
import { Mainrouter } from './router/mainrouter'
import { Forgetpass } from './first page/forgetpass'
import { Resetpass } from './first page/resetpass'
import { Dashnav } from './router/dashboard/dashnav'

import { Dfirst } from './router/dashboard/dfirst'
import SideNav from './router/dashboard/dashboard'
import { Newregister } from './router/dashboard/newregister'
import { Viewregisted } from './router/dashboard/Viewregisted'
import { Shortlist } from './router/dashboard/shortlist'








function App() {


  return (
    <>
    <BrowserRouter>
    <Mainrouter/>
    </BrowserRouter>
    {/* <Viewregisted/> */}
    </>
  )
}

export default App
