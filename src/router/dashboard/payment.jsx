import React, { useEffect, useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const Payment = () => {
    var [data, setdata] = useState([])
    var [data2, setdata2] = useState([])

    var search = (e) => {
        var inputres = e.target.value.toLowerCase();
        var filter = data2.filter((val) => val.name.toLowerCase().includes(inputres))
        setdata(filter)
    }

    var api = async () => {
        const snapshot = await getDocs(collection(db, 'members'));
        const members = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setdata(members)
        setdata2(members)
    }

    useEffect(() => { api() }, [])

    return (
        <div className='view-container'>
            <div className='view-b1'>
                <div><p>Payment History</p></div>
                <div className='b1-1'>
                    <p><FilterListIcon /></p>
                    <p><input type="search" className='view-search' placeholder='Search' onInput={(event) => search(event)} /></p>
                </div>
            </div>
            <div className='table-cont'>
                <table className='table'>
                    <thead className='thead'>
                        <tr className='thead-tr'>
                            <th>S.No</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Joining Date</th>
                            <th>Fees Amount</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {data.map((val) => (
                            <tr className='tbody-tr' key={val.id}>
                                <td>{val.sno}</td>
                                <td><img src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180" alt="" className='profile-img' /></td>
                                <td>{val.name}</td>
                                <td>{val.joiningdate}</td>
                                <td>{val.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
