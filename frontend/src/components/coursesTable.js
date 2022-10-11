import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";
import Modal from './courseModal';
const updateUserAPI = "http://127.0.0.1:8000/api/update_course";

function Table({url}) {

    const [user, setUser] = useState([]);
    const [id, setID] = useState("");
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
                    <th>Name</th>
                    <th>Description</th>
                    <th>Instructor</th>
                </tr>
                {
                    user.map((data)=>{
                        return(<tr><td>{data.name}</td><td>{data.description}</td><td>{data.user.first_name}</td><td><img onClick={() => {setID(data._id); setShow(true);}} src="https://img.icons8.com/material/344/change-user-female.png"></img></td></tr>)
                    })
                }
            </tbody>
        </table>

        <Modal onClose={()=>setShow(false)} url={updateUserAPI} show={showModal} id={id}/>
        </>
    )
}

export default Table;