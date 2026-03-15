import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './shortlist.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Shortlist = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!location.state) return;
      const docRef = doc(db, 'members', location.state);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSelectedUser({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    fetchUser();
  }, [location.state]);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <CircularProgress />
    </Box>
  );

  if (!selectedUser) return <p style={{ textAlign: 'center' }}>User not found</p>;

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
          <img src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180" className="short-img" alt="profile" />
          <p>{selectedUser.name}</p>
        </div>
        <div className="short-b3">
          <div><p>Age</p><p className='b4-c'>{selectedUser.age}</p></div><hr />
          <div><p>Gender</p><p className='b4-c'>{selectedUser.gender}</p></div><hr />
          <div><p>Contact Number</p><p className='b4-c'>{selectedUser.phone}</p></div><hr />
          <div><p>City</p><p className='b4-c'>{selectedUser.location}</p></div>
        </div>
        <div className="short-b4">
          <div className="short-b4-1"><p className='b4-t'>Duration</p><p className='b4-c'>{selectedUser.duration || '6 Months'}</p></div>
          <div className="short-b4-1"><p className='b4-t'>Joining Date</p><p className='b4-c'>{selectedUser.joiningdate}</p></div>
          <div className="short-b4-1"><p className='b4-t'>Expired till</p><p className='b4-c'>{selectedUser.expiredwithin}</p></div>
          <div className="short-b4-1"><p className='b4-t'>Expired Date</p><p className='b4-c'>{selectedUser.expiredate}</p></div>
        </div>
        <button className='short-btn-edit'>Edit</button>
      </div>
    </div>
  );
};
