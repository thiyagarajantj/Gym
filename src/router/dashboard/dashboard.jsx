import * as React from 'react';
import './dashboard.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentIcon from '@mui/icons-material/Payment';
import { Dashnav } from './dashnav';
import { Outlet, Link} from 'react-router-dom';

export default function SideNav() {
  const [logoutpopup, setlogoutpopup] = React.useState(false);
  const [menubar, setmenubar] = React.useState(false);
  var [selectedbtn,setselectedbtn]=React.useState()
  const logout = () => {
    setlogoutpopup(!logoutpopup);
  };



  
  
  const handleMenuClose = () => {
    if (window.innerWidth <= 520) {
      setmenubar(false);
    }
  };

  return (
    <>

      <Dashnav menu={() => setmenubar(!menubar)} />

      <div className="sum">
        <div>
          
          <div className={`sidenav-container ${menubar ? 'active' : ''}`}>
            <div className="nav-btns">

              <Link to="/n" className="lk" onClick={handleMenuClose}>
                <button className={`nav-btn ${selectedbtn == 'dashboard' ? 'active' :' '}`} onClick={()=>setselectedbtn('dashboard')}>
                  <p className="np1"><DashboardIcon /></p>
                  <p className="np2">Dashboard</p>
                </button>
              </Link>

              <Link to="/viewregist" className="lk" onClick={handleMenuClose}>
                <button className={`nav-btn ${selectedbtn == 'regist' ? 'active' :' '}`} onClick={()=>setselectedbtn('regist')}>
                  <p className="np1"><GroupsIcon /></p>
                  <p className="np2">View Registered</p>
                </button>
              </Link>

              <Link to="/payment" className="lk" onClick={handleMenuClose}>
                <button className={`nav-btn ${selectedbtn == 'payment' ? 'active' :' '}`} onClick={()=>setselectedbtn('payment')}>
                  <p className="np1"><PaymentIcon /></p>
                  <p className="np2">Payment History</p>
                </button>
              </Link>

            </div>

            <div>
              <button className="nav-btn" onClick={logout}>
                <p className="np1-1"><LogoutIcon /></p>
                <p className="np2">Logout</p>
              </button>
            </div>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>

    
      <div className={`logout-popup ${logoutpopup ? 'active' : ''}`}>
        <div className="logout-card">
          <p className="clog1">Are You Sure Want to</p>
          <p className="clog2">Logout ?</p>
          <div className="clogbtn">
            <Link to="/" onClick={() => setlogoutpopup(false)}>
              <button className="clogbtn1">Logout</button>
            </Link>
            <button className="clogbtn2" onClick={logout}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}