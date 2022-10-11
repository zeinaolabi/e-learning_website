import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";
import Modal from './courseModal';
const updateUserAPI = "http://127.0.0.1:8000/api/update_course";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function Table({url}) {
    const [user, setUser] = useState([]);
    const [id, setID] = useState("");
    const [showModal, setShow] = useState(false); 

    const getUsers = async() => {
        const response = await axios(url, config);
        setUser(response.data.Users)
    }

    const getID = async(id) => {
        setID(id);
    }

    useEffect( () =>{
        getUsers();
        getID();
    }, [getUsers, getID])

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
                        return(<tr><td>{data.name}</td><td>{data.description}</td><td>{data.user.first_name + " " + data.user.last_name}</td><td><img onClick={() => {getID(data._id); setShow(true);}} src="https://img.icons8.com/ios-glyphs/2x/approve-and-update.png"></img></td></tr>)
                    })
                }
            </tbody>
        </table>

        <Modal onClose={()=>setShow(false)} url={updateUserAPI} show={showModal} id={id} title="Edit Course"/>
        </>
    )
}

export default Table;