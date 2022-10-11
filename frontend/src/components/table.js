import React, { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";

function Table({url}) {

    const [user, setUser] = useState([]);

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
                        return(<tr><td>{data.first_name}</td><td>{data.last_name}</td><td>{data.email}</td></tr>)
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Table;