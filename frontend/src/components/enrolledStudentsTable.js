import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";
const updateUserAPI = "http://127.0.0.1:8000/api/auth/update_user";
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function EnrolledStudentTable({url}) {
    const [user, setUser] = useState([]);

    const getUsers = async() => {
        const response = await axios(url, config);
        setUser(response.data)
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
                        return(<tr><td>{data.first_name}</td><td>{data.last_name}</td><td>{data.email}</td><td></td></tr>)
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default EnrolledStudentTable;