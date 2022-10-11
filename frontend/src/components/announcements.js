import React, {useState, useEffect} from "react";
import axios from "axios";
import Announcement from './announcement'
const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
}

function Announcements({courseID}) {
    const getAnnouncementsAPI = "http://127.0.0.1:8000/api/get_course_announcements/" + courseID;
    const [announcement, setAnnouncement] = useState([]);

    const getAssignments = async() => {
        const response = await axios(getAnnouncementsAPI, config);
        setAnnouncement(response.data)
    }

    useEffect( () =>{
        getAssignments();
    }, [])

    return(
        <div className="announcements">
            {
                announcement.map((data)=>{
                    return(
                        <Announcement user={data.user.first_name + " " + data.user.last_name} title={data.title} description={data.description} created_at={data.created_at}/>
                    )
                })
            }
        </div>
    )
}

export default Announcements;