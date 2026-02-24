import React, { useEffect, useState } from 'react'
import './viewregisted.css'
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import { url } from './dfirst';
import { useNavigate } from 'react-router-dom';

export const Viewregisted = () => {
    var [data, setdata] = useState([])
    var [data2, setdata2] = useState([])
    var [del, setdel] = useState(true)
    var [deldata, setdeldata] = useState([])
    var [delpopup, setdelpopup] = React.useState(false)
    var [downloadpopup, setdownloadpopup] = React.useState(false)

    var nav = useNavigate()



    var find = async (e) => {
        var inputres = await e.target.value
        var filter = data2.filter((val) => val.name.toLowerCase().includes(inputres))
        setdata(filter)

    }

    var api = async () => {
        var value = await axios.get(url)
        setdata(value.data)
        setdata2(value.data)
    }
    useEffect(() => {
        api()
    }, [])

    var er =  (e, val) => {
  if (e.target.checked) {
  setdeldata((prev) => [...prev, val]);  
  } else {
    setdeldata((prev) => prev.filter((item) => item.id !== val.id)); 
  }
};

    var delfil = () => {
        setdelpopup(!delpopup)
        
    }
    var downfill = () => {
        setdownloadpopup(!downloadpopup)
    }
    var delconform = async () => {
        await deldata.map(async (val) => {
            await axios.delete(`${url}/${val.id}`)
        })
        api()
        console.log(deldata);
        
        setdelpopup(!delpopup)
        setdel(!del)
        setdeldata('')
    }
    return (
        <>
            {
                del ? (
                    <div className='view-container'>
                        <div className='view-b1'>
                            <div>
                                <p className='view-tittle'>View Registered</p>
                            </div>
                            <div className='b1-1'>
                                <p > <FilterListIcon /></p>
                                <p><input type="search" className='view-search' placeholder='Search' onInput={(event) => find(event)} /></p>
                            </div>

                        </div>
                        <div className='view-b2'>
                            <p className='del' onClick={() => setdel(false)}><DeleteIcon /></p>
                            <p><DownloadIcon /></p>
                        </div>
                        <div>
                            <table className='table'>
                                <thead className='thead'>
                                    <tr className='thead-tr'>
                                        <th className='j1'>S.No</th>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Phone no</th>
                                        <th>Location</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody className='tbody'>
                                    {
                                        data.map((val) => (
                                            <tr className='tbody-tr' onClick={() => nav('/shortlist', { state: `${val.sno}` })}>
                                                <td className='j1' onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.sno}</td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}><img src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180" alt="" className='profile-img' /></td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.name}</td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.age}</td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.gender}</td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.phone}</td>
                                                <td onClick={() => nav('/shortlist', { state: `${val.sno}` })}>{val.location}</td>
                                                {/* <td className='del'><DeleteIcon /></td> */}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className='view-container'>
                        <div className='view-b1'>
                            <div>
                                <p className='view-tittle'>View Registered</p>
                            </div>
                            <div className='b1-1'>
                                <p > <FilterListIcon /></p>
                                <p><input type="search" className='view-search' placeholder='Search' onInput={(event) => find(event)} /></p>
                            </div>

                        </div>
                        <div className='view-b2'>
                            <p className='del' onClick={delfil}><DeleteIcon /></p>
                            <p onClick={downfill}><DownloadIcon /></p>
                        </div>
                        <div>
                            <table className='table'>
                                <thead className='thead'>
                                    <tr className='thead-tr'>
                                        <th>Action</th>
                                        <th className='j1'>S.No</th>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Phone no</th>
                                        <th>Location</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody className='tbody'>
                                    {
                                        data.map((val) => (
                                            <tr className='tbody-tr' >
                                                <td><input type="checkbox" onChange={(e) => er(e, val)} /></td>
                                                <td className='j1'>{val.sno}</td>
                                                <td><img src="https://tse4.mm.bing.net/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?pid=Api&P=0&h=180" alt="" className='profile-img' /></td>
                                                <td>{val.name}</td>
                                                <td>{val.age}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.location}</td>
                                                {/* <td className='del'><DeleteIcon /></td> */}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
            <div className={`delpopup${delpopup ? 'active' : ' '}`}>
                <div className="del-card">
                    <p className='clog1'>Are You Sure Want to</p>
                    <p className='clog2' >Delete ?</p>
                    <div className='clogbtn' ><button className='clogbtn1' onClick={delconform}>Sure</button><button className='clogbtn2' onClick={delfil}>Cancel</button></div>
                </div>
                
            </div>
            <div className={`downloadpopup${downloadpopup ? 'active' : ' '}`}>
                <div className="download-card">
                    <p className='clog1'>Are You Sure Want to</p>
                    <p className='clog2'>Download ?</p>
                    <div className='clogbtn' ><button className='clogbtn1'>Sure</button><button className='clogbtn2' onClick={downfill}>Cancel</button></div>
                </div>
            </div>
        </>
    )
}
