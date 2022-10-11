import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";
import Modal from './editProfileModal';

function Table({url}) {

    const [user, setUser] = useState([]);
    const [showModal, setShow] = useState(false); 

    const getUsers = async() => {
        const response = await axios(url);
        setUser(response.data.Users)
    }

    useEffect( () =>{
        getUsers()
    }, [])

    return(
        <>
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {
                    user.map((data)=>{
                        return(<tr><td>{data.first_name}</td><td>{data.last_name}</td><td>{data.email}</td><td><img onClick={() => setShow(true)} src="https://img.icons8.com/material/344/change-user-female.png"></img></td></tr>)
                    })
                }
            </tbody>
        </table>

        <Modal onClose={()=>setShow(false)} show={showModal}/>
        </>
    )
}

export default Table;