import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './shortlist.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './dfirst';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Shortlist = () => {
  const [data, setData] = useState([]);  
  const location = useLocation();
  const navigate = useNavigate();

  const api = async () => {
    try { 
      const value = await axios.get(url);
      setData(value.data);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    api();
  }, []);

  console.log("Selected ID from location:", location.state);
  console.log("Fetched data:", data);

 
  const selectedUser = data.find(
    (val) => val.sno === location.state  
  );
  console.log(selectedUser);
  

  
  if (data.length === 0) {
    // return <p style={{ textAlign: "center" }}>Loading profile...</p>;
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  }

  if (selectedUser) {
   return (
    <div className="shortlist-container">
      <div className="shortlist-card">
        <div className="short-b1">
          <div>View Profile</div>
          <div className="short-b1-1" onClick={() => navigate(-1)}>
            <p><ArrowBackIcon /></p>
            <p>Back</p>
          </div>
        </div>

        <div className="short-b2">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180"
            className="short-img"
            alt="profile"
          />
          <p>{selectedUser.name}</p>
        </div>

        <div className="short-b3">
          <div><p>Age</p><p className='b4-c'>{selectedUser.age}</p></div><hr />
          <div><p>Gender</p><p className='b4-c'>{selectedUser.gender}</p></div><hr />
          <div><p>Contact Number</p><p className='b4-c'>{selectedUser.phone}</p></div><hr />
          <div><p>City</p><p className='b4-c'>{selectedUser.location}</p></div>
        </div>

        <div className="short-b4">
          <div className="short-b4-1"><p className='b4-t'>Duration</p><p className='b4-c'>6 Months</p></div>
          <div className="short-b4-1"><p className='b4-t'>Joining Date</p><p className='b4-c'>{selectedUser.joiningdate}</p></div>
          <div className="short-b4-1"><p className='b4-t'>Expired till</p><p className='b4-c'>{selectedUser.expiredwithin}</p></div>
          <div className="short-b4-1"><p className='b4-t'>Expired Date</p><p className='b4-c'>{selectedUser.expiredate}</p></div>
        </div>

        <button className='short-btn-edit'>Edit</button>
      </div>
        </div>
  );
  }

  
  
};
