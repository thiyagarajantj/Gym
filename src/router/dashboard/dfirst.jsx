import React, { useState, useEffect } from 'react';
import './dfirst.css';
import axios from "axios";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom';

export var url = "http://localhost:3000/posts";
export const Dfirst = () => {
  const [showExpired, setShowExpired] = useState(true);
   const [data, setData] = useState([]);
   var [renewalpopup,setrenewalpopup]=useState(false)

   var notrenewal=()=>{
    setrenewalpopup(!renewalpopup)
   }

   const api = async () => {
      const value = await axios.get(url);
      console.log(value.data);
      setData(value.data);
    };


  useEffect(() => {
   
    api();
  }, []);


  return (
    <div className='dfirst-container'>
      <div className='threebtn-cont'>
        <div className='threebtn-1'>
          <Link to={'/new'}><button className='dfbt1'><p className='new-icon'><PersonAddIcon/></p>New Register</button></Link>
        </div>
        <div className='threebtn-2'>
          <button className={`dfbt2${!showExpired ? 'active' :' ' }`} onClick={() => setShowExpired(false)}>
            Accounts going to expire within 3 days
          </button>
          <button className={`dfbt3${showExpired ? 'active' : ' '}`} onClick={() => setShowExpired(true)}>
            Accounts Expired
          </button>
        </div>
      </div>

      <hr className='hr2' />

      {
        showExpired ? (
          <div className='tb12'>
            <p className='tb12-tittle'>Accounts Expired</p>
            <table className='table'>
              <thead>
                <tr className='thead-tr'>
                  <th className='j1'>S.No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Phone No</th>
                  <th>Joining Date</th>
                  <th>Expired</th>
                  <th>Renewal</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {
                  data.map((val, idx) => (
                    <tr className='tbody-tr' key={idx}>
                      <td className='j1'>{val.sno}</td>
                      <td><img src={val.profile} alt="" className='profile-img' /></td>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>{val.joiningdate}</td>
                      <td>{val.expiredate}</td>
                      <td onClick={()=>setrenewalpopup(!renewalpopup)}><HistoryIcon/></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        ) : (
          <div className='tb12'>
            <p className='tb12-tittle'>Accounts going to expire within 3 days</p>
            <table className='table'>
              <thead>
                <tr className='thead-tr'>
                  <th className='j1'>S.No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Phone No</th>
                  <th>Joining Date</th>
                  <th>Expired Date</th>
                  <th>Expired</th>
                  <th>Renewal</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {
                  data.map((val, i) => (
                    <tr className='tbody-tr' key={i}>
                      <td className='j1'>{val.sno}</td>
                      <td><img src={val.profile} alt="" className='profile-img' /></td>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>{val.joiningdate}</td>
                      <td>{val.expiredwithin}</td>
                      <td>{val.expiredate}</td>
                      <td><HistoryIcon/></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
       <div className={`renewal-popup${renewalpopup ? 'active' : ' '}`}>
        <div className="renewal-card">
          <p className='clog1'>Are You Sure Want to</p>
          <p className='clog2'>Renewal ?</p>
          <div className='clogbtn' onClick={notrenewal}><button className='clogbtn1'>Renewal</button><button className='clogbtn2' onClick={notrenewal}>Cancel</button></div>
        </div>
      </div>
    </div>
  );
}
