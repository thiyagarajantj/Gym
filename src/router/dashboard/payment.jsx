import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import { url } from './dfirst';
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Payment = () => {
      var [data,setdata]=useState([])
      var [data2,setdata2]=useState([])

      var search=(e)=>{
        var inputres=e.target.value.toLowerCase();
        var filter=data2.filter((val)=>val.name.toLowerCase().includes(inputres))
        setdata(filter)
      }

    var api=async()=>{
        var value = await axios.get(url)
        setdata(value.data)
        setdata2(value.data)
    }
    useEffect(()=>{
        api()
    },[])
    var nav=useNavigate()
    return (
        <div className='view-container'>
            <div className='view-b1'>
                <div>
                    <p>Payment History</p>
                </div>
                <div className='b1-1'>
                   <p > <FilterListIcon/></p>
                    <p><input type="search" className='view-search' placeholder='Search' onInput={(event)=>search(event)}/></p>
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
                        {
                            data.map((val)=>(
                                <tr className='tbody-tr' onClick={()=>nav()}>
                                    <td>{val.sno}</td>
                                    <td><img src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180" alt="" className='profile-img'/></td>
                                    <td>{val.name}</td>
                                    <td>{val.joiningdate}</td>
                                    <td>{val.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
